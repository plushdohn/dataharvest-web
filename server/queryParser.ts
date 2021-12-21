import { Document } from "bson";
import filterHandler from "./handlers/filters";
import { ClientHints, OperationField, Query } from "../shared/types";
import subjectHandler from "./handlers/subject";
import groupHandler from "./handlers/group";
import operationsHandler from "./handlers/operations";
import sortHandler from "./handlers/sort";
import starterHandler from "./handlers/starts";

export function parse(source: Query): Document[] {
  const output: Document[] = [];

  // Setup $match block
  const matchExpr = {};

  const starter = source.starter;
  Object.assign(matchExpr, starterHandler(starter.id, starter.args));

  const filters = source.filters;
  Object.assign(matchExpr, filterHandler(filters));

  // Add match block to query out
  if (Object.keys(matchExpr).length > 0) {
    output.push({
      $match: matchExpr,
    });
  }

  // Unwind in any case
  // TODO: Check if unwind is actually needed
  output.push({
    $unwind: "$participants",
  });

  const subject = source.subject;
  if (subject) {
    output.push({
      $match: subjectHandler(subject.id, subject.args),
    });
  }

  // Setup a variable for stages to add hints needed on the client
  let hint: ClientHints | null = null;

  // Start setting up group expression for operations and/or grouping
  const groupExpr = {};

  // Check if there is grouping
  const group = source.group;
  if (group) {
    let g;
    [g, hint] = groupHandler(group.id);
    Object.assign(groupExpr, g);
  } else {
    // Group all into one
    Object.assign(groupExpr, {
      _id: null,
    });
  }

  // Get a sample count before applying operations
  Object.assign(groupExpr, {
    [OperationField.GamesCount]: {
      $sum: 1,
    },
  });

  if (!source.operation) {
    throw new Error("An operation is required.");
  }

  const [opFirstStage, opSecondStage] = operationsHandler(source.operation);
  Object.assign(groupExpr, opFirstStage);

  // Store group in output
  output.push({
    $group: groupExpr,
  });

  // Setup a addFields expression for hints and/or a second operation stage
  const addFieldsExpr = {};

  // Check if there are hints to add
  if (hint !== null) {
    Object.assign(addFieldsExpr, {
      hint,
    });
  }

  // Check if a second operation stage is needed
  if (opSecondStage) {
    Object.assign(addFieldsExpr, opSecondStage);
  }

  // Finally push add fields expr
  output.push({
    $addFields: addFieldsExpr,
  });

  // Check if there are sorts to process
  const sort = source.sort;
  if (sort !== undefined) {
    output.push({
      $sort: sortHandler(sort, source.operation.id),
    });
  }

  // Force results to be limited to 10
  output.push({
    $limit: 10,
  });

  return output;
}

import { useMemo } from "react";
import { OperationId } from "shared/types";
import { OperationBlock } from "../../shared/blocks/operations/GenericOperation";

export default function QueryCanvasOperations(props: {
  operations: {
    [key in OperationId]?: any;
  };
}) {
  const keys = useMemo(
    () => Object.keys(props.operations) as OperationId[],
    [props.operations]
  );
  return (
    <>
      {keys.map((operationId) => (
        <OperationBlock key={operationId} id={operationId} />
      ))}
    </>
  );
}

import { OperationId } from "shared/types";
import { OperationBlock } from "../../shared/blocks/operations/GenericOperation";

export default function QueryCanvasOperations(props: {
  operations: OperationId[];
}) {
  return (
    <>
      {props.operations.map((operationId) => (
        <OperationBlock key={operationId} id={operationId} />
      ))}
    </>
  );
}

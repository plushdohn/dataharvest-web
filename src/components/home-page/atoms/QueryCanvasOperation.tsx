import { useMemo } from "react";
import { OperationId } from "shared/types";
import { OperationBlock } from "../../shared/blocks/operations/GenericOperation";

export default function QueryCanvasOperation(props: {
  operation: {
    id: OperationId;
    args: any;
  };
}) {
  return <OperationBlock id={props.operation.id} />;
}

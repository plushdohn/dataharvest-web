import { OperationId } from "shared/types";
import { SortBlock } from "../../shared/blocks/sorts/GenericSort";

export default function QueryCanvasSort(props: { operationId: OperationId }) {
  return <SortBlock id={props.operationId} />;
}

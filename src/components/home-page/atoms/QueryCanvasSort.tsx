import { SortId } from "shared/types";
import { SortBlock } from "../../shared/blocks/sorts/GenericSort";

export default function QueryCanvasSort(props: { sortId: SortId }) {
  return <SortBlock id={props.sortId} />;
}

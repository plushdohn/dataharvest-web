import { useDispatch } from "react-redux";
import { removeSort, updateOrAddSort } from "@/src/store/queryReducer";
import { BlockKind, SortId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function SortDummy(props: { id: SortId }) {
  const ComponentToMount = ASSOCIATIONS.sorts[props.id];

  return (
    <BlockContainer kind={BlockKind.Sort}>
      <ComponentToMount />
    </BlockContainer>
  );
}

export function SortPicker(props: { id: SortId }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(updateOrAddSort(props.id));
  }

  const ComponentToMount = ASSOCIATIONS.sorts[props.id];

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={handleClick}
      className="my-4"
    >
      <ComponentToMount />
    </BlockContainer>
  );
}

export function SortBlock(props: { id: SortId }) {
  const dispatch = useDispatch();

  const ComponentToMount = ASSOCIATIONS.sorts[props.id];

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={() => dispatch(removeSort())}
    >
      <ComponentToMount />
    </BlockContainer>
  );
}

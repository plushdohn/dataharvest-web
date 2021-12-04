import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { removeSort, updateOrAddSort } from "@/src/store/queryReducer";
import { BlockKind, OperationId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function SortDummy(props: { id: OperationId; initialState: boolean }) {
  return (
    <BlockContainer kind={BlockKind.Sort}>
      {ASSOCIATIONS.sorts[props.id].component({
        asc: props.initialState,
        setAsc: () => {},
      })}
    </BlockContainer>
  );
}

export function SortPicker(props: { id: OperationId; initialState: boolean }) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateOrAddSort({
        id: props.id,
        ascending: args,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={handleClick}
      className="my-4"
    >
      {ASSOCIATIONS.sorts[props.id].component({
        asc: args,
        setAsc: setArgs,
      })}
    </BlockContainer>
  );
}

export function SortBlock(props: { id: OperationId }) {
  const asc = useSelector(
    (state: RootState) => state.query.sort?.ascending
  ) as boolean;
  const dispatch = useDispatch();

  function handleChange(n: boolean) {
    dispatch(
      updateOrAddSort({
        id: props.id,
        ascending: n,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={() => dispatch(removeSort())}
    >
      {ASSOCIATIONS.sorts[props.id].component({
        asc,
        setAsc: handleChange,
      })}
    </BlockContainer>
  );
}

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { removeFilter, updateOrAddFilter } from "@/src/store/queryReducer";
import { BlockKind, FilterId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function FilterDummy<Type>(props: { id: FilterId; initialState: Type }) {
  return (
    <BlockContainer kind={BlockKind.Filter}>
      {ASSOCIATIONS.filters[props.id].component({
        args: props.initialState,
        setArgs: () => {},
      })}
    </BlockContainer>
  );
}

export function FilterPicker<Type>(props: {
  id: FilterId;
  initialState: Type;
}) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateOrAddFilter({
        id: props.id,
        args,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Filter}
      onClick={handleClick}
      className="my-4"
    >
      {ASSOCIATIONS.filters[props.id].component({
        args,
        setArgs,
      })}
    </BlockContainer>
  );
}

export function FilterBlock<Type>(props: { id: FilterId }) {
  const args = useSelector((state: RootState) => state.query.filters[props.id]);
  const dispatch = useDispatch();

  function handleChange(n: Type) {
    dispatch(
      updateOrAddFilter({
        id: props.id,
        args: n,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Filter}
      onClick={() => dispatch(removeFilter(props.id))}
    >
      {ASSOCIATIONS.filters[props.id].component({
        args,
        setArgs: handleChange,
      })}
    </BlockContainer>
  );
}

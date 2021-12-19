import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { removeFilter, updateOrAddFilter } from "@/src/store/queryReducer";
import { BlockKind, FilterId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function FilterDummy<Type>(props: { id: FilterId; initialState: Type }) {
  const ComponentToMount = ASSOCIATIONS.filters[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Filter}>
      <ComponentToMount args={props.initialState} setArgs={() => {}} />
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

  const ComponentToMount = ASSOCIATIONS.filters[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Filter}
      onClick={handleClick}
      className="my-4"
    >
      <ComponentToMount args={args} setArgs={setArgs} />
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

  const ComponentToMount = ASSOCIATIONS.filters[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Filter}
      onClick={() => dispatch(removeFilter(props.id))}
    >
      <ComponentToMount args={args} setArgs={handleChange} />
    </BlockContainer>
  );
}

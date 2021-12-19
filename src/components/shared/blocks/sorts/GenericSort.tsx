import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { removeSort, updateOrAddSort } from "@/src/store/queryReducer";
import { BlockKind, OperationId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function SortDummy(props: { id: OperationId; initialState: boolean }) {
  const ComponentToMount = ASSOCIATIONS.sorts[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Sort}>
      <ComponentToMount args={props.initialState} setArgs={() => {}} />
    </BlockContainer>
  );
}

export function SortPicker(props: { id: OperationId; initialState: boolean }) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();
  const currentOperations = useSelector(
    (state: RootState) => state.query.operations
  );

  const disabled = useMemo(
    () => !Object.keys(currentOperations).includes(props.id),
    [currentOperations]
  );

  function handleClick() {
    if (disabled) return;

    dispatch(
      updateOrAddSort({
        id: props.id,
        args: args,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.sorts[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={handleClick}
      className="my-4"
      disabled={disabled}
    >
      <ComponentToMount args={args} setArgs={setArgs} />
    </BlockContainer>
  );
}

export function SortBlock(props: { id: OperationId }) {
  const args = useSelector(
    (state: RootState) => state.query.sort?.args
  ) as boolean;
  const dispatch = useDispatch();

  function handleChange(n: boolean) {
    dispatch(
      updateOrAddSort({
        id: props.id,
        args: n,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.sorts[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Sort}
      onClick={() => dispatch(removeSort())}
    >
      <ComponentToMount args={args} setArgs={handleChange} />
    </BlockContainer>
  );
}

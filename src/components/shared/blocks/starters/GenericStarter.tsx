import { updateOrAddStarter } from "@/src/store/queryReducer";
import { useDispatch, useSelector } from "react-redux";
import { BlockKind, StarterId } from "shared/types";
import { useState } from "react";
import BlockContainer from "../BlockContainer";
import { RootState } from "@/src/store";
import { ASSOCIATIONS } from "../associations";

export function StarterDummy<Type>(props: {
  id: StarterId;
  initialState: Type;
}) {
  const ComponentToMount = ASSOCIATIONS.starters[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Starter}>
      <ComponentToMount args={props.initialState} setArgs={() => {}} />
    </BlockContainer>
  );
}

export function StarterPicker<Type>(props: {
  id: StarterId;
  initialState: Type;
}) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateOrAddStarter({
        id: props.id,
        args,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.starters[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Starter}
      onClick={handleClick}
      className="mb-4"
      disabled={props.id === StarterId.All}
    >
      <ComponentToMount args={args} setArgs={setArgs} />
    </BlockContainer>
  );
}

export function StarterBlock<Type>(props: { id: StarterId }) {
  const args = useSelector((state: RootState) => state.query.starter.args);
  const dispatch = useDispatch();

  function handleChange(n: Type) {
    dispatch(
      updateOrAddStarter({
        id: props.id,
        args: n,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.starters[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Starter}>
      <ComponentToMount args={args} setArgs={handleChange} />
    </BlockContainer>
  );
}

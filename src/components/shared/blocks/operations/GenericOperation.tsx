import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOrAddOperation,
  removeOperation,
} from "@/src/store/queryReducer";
import { BlockKind, OperationId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";
import { RootState } from "@/src/store";

export function OperationDummy<Type>(props: {
  id: OperationId;
  initialState: Type;
}) {
  const ComponentToMount = ASSOCIATIONS.operations[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Operation}>
      <ComponentToMount args={props.initialState} setArgs={() => {}} />
    </BlockContainer>
  );
}

export function OperationPicker<Type>(props: {
  id: OperationId;
  initialState: Type;
}) {
  const dispatch = useDispatch();
  const [args, setArgs] = useState(props.initialState);

  function handleClick() {
    dispatch(
      updateOrAddOperation({
        id: props.id,
        args,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.operations[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Operation}
      onClick={handleClick}
      className="my-4"
    >
      <ComponentToMount args={args} setArgs={setArgs} />
    </BlockContainer>
  );
}

export function OperationBlock<Type>(props: { id: OperationId }) {
  const args = useSelector((state: RootState) => state.query.operation?.args);

  const dispatch = useDispatch();

  function handleChange(n: Type) {
    dispatch(
      updateOrAddOperation({
        id: props.id,
        args: n,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.operations[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Operation}
      onClick={() => dispatch(removeOperation(props.id))}
    >
      <ComponentToMount args={args} setArgs={handleChange} />
    </BlockContainer>
  );
}

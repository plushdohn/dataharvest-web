import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOperation, removeOperation } from "@/src/store/queryReducer";
import { BlockKind, OperationId } from "shared/types";
import BlockContainer from "../BlockContainer";
import { ASSOCIATIONS } from "../associations";

export function OperationDummy(props: { id: OperationId }) {
  return (
    <BlockContainer kind={BlockKind.Operation}>
      {ASSOCIATIONS.operations[props.id]()}
    </BlockContainer>
  );
}

export function OperationPicker(props: { id: OperationId }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addOperation(props.id));
  }

  return (
    <BlockContainer
      kind={BlockKind.Operation}
      onClick={handleClick}
      className="my-4"
    >
      {ASSOCIATIONS.operations[props.id]()}
    </BlockContainer>
  );
}

export function OperationBlock(props: { id: OperationId }) {
  const dispatch = useDispatch();

  return (
    <BlockContainer
      kind={BlockKind.Operation}
      onClick={() => dispatch(removeOperation(props.id))}
    >
      {ASSOCIATIONS.operations[props.id]()}
    </BlockContainer>
  );
}

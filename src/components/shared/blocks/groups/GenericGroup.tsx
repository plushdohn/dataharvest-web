import { RootState } from "@/src/store";
import { removeGroup, updateOrAddGroup } from "@/src/store/queryReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockKind, GroupId } from "shared/types";
import { ASSOCIATIONS } from "../associations";
import BlockContainer from "../BlockContainer";

export function GroupDummy<Type>(props: { id: GroupId; initialState: Type }) {
  return (
    <BlockContainer kind={BlockKind.Group}>
      {ASSOCIATIONS.groups[props.id].component({
        args: props.initialState,
        setArgs: () => {},
      })}
    </BlockContainer>
  );
}

export function GroupPicker<Type>(props: { id: GroupId; initialState: Type }) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateOrAddGroup({
        id: props.id,
        args,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Group}
      onClick={handleClick}
      className="my-4"
    >
      {ASSOCIATIONS.groups[props.id].component({
        args,
        setArgs,
      })}
    </BlockContainer>
  );
}

export function GroupBlock<Type>(props: { id: GroupId }) {
  const args = useSelector((state: RootState) => state.query.subject);
  const dispatch = useDispatch();

  function handleChange(n: Type) {
    dispatch(
      updateOrAddGroup({
        id: props.id,
        args: n,
      })
    );
  }

  return (
    <BlockContainer
      kind={BlockKind.Group}
      onClick={() => dispatch(removeGroup())}
    >
      {ASSOCIATIONS.groups[props.id].component({
        args,
        setArgs: handleChange,
      })}
    </BlockContainer>
  );
}

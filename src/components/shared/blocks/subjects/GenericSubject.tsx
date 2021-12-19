import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlockContainer from "../BlockContainer";
import { BlockKind, SubjectId } from "shared/types";
import { removeSubject, updateOrAddSubject } from "@/src/store/queryReducer";
import { RootState } from "@/src/store";
import { ASSOCIATIONS } from "../associations";

export function SubjectDummy<Type>(props: {
  id: SubjectId;
  initialState: Type;
}) {
  const ComponentToMount = ASSOCIATIONS.subjects[props.id].component;

  return (
    <BlockContainer kind={BlockKind.Subject}>
      <ComponentToMount args={props.initialState} setArgs={() => {}} />
    </BlockContainer>
  );
}

export function SubjectPicker<Type>(props: {
  id: SubjectId;
  initialState: Type;
}) {
  const [args, setArgs] = useState(props.initialState);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateOrAddSubject({
        id: props.id,
        args,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.subjects[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Subject}
      onClick={handleClick}
      className="my-4"
    >
      <ComponentToMount args={args} setArgs={setArgs} />
    </BlockContainer>
  );
}

export function SubjectBlock<Type>(props: { id: SubjectId }) {
  const args = useSelector((state: RootState) => state.query.subject?.args);
  const dispatch = useDispatch();

  function handleChange(n: Type) {
    dispatch(
      updateOrAddSubject({
        id: props.id,
        args: n,
      })
    );
  }

  const ComponentToMount = ASSOCIATIONS.subjects[props.id].component;

  return (
    <BlockContainer
      kind={BlockKind.Subject}
      onClick={() => dispatch(removeSubject())}
    >
      <ComponentToMount args={args} setArgs={handleChange} />
    </BlockContainer>
  );
}

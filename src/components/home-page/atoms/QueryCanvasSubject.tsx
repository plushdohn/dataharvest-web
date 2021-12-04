import { SubjectId } from "shared/types";
import { SubjectBlock } from "../../shared/blocks/subjects/GenericSubject";

export default function QueryCanvasSubject(props: { subjectId: SubjectId }) {
  return <SubjectBlock id={props.subjectId} />;
}

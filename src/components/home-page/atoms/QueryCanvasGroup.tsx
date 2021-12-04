import { GroupId } from "shared/types";
import { GroupBlock } from "../../shared/blocks/groups/GenericGroup";

export default function QueryCanvasGroup(props: { groupId: GroupId }) {
  return <GroupBlock id={props.groupId} />;
}

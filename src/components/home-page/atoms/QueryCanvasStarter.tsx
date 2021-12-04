import { StarterId } from "shared/types";
import { StarterBlock } from "../../shared/blocks/starters/GenericStarter";

export default function QueryCanvasStarter(props: { starterId: StarterId }) {
  return <StarterBlock id={props.starterId} />;
}

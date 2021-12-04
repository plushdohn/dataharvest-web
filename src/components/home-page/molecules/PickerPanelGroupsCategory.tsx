import { GroupId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { GroupPicker } from "../../shared/blocks/groups/GenericGroup";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";

const entries = Object.entries(ASSOCIATIONS.groups);

export default function PickerPanelGroupsCategory() {
  return (
    <PickerPanelCategoryContainer title="Groups (zero or one)">
      {entries.map(([key, data]) => (
        <GroupPicker
          key={key}
          id={key as GroupId}
          initialState={data.initialState}
        />
      ))}
    </PickerPanelCategoryContainer>
  );
}

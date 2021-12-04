import { StarterId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { StarterPicker } from "../../shared/blocks/starters/GenericStarter";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";

const startersAsEntries = Object.entries(ASSOCIATIONS.starters);

export default function PickerPanelStartersCategory() {
  return (
    <PickerPanelCategoryContainer title="Starters (one)">
      {startersAsEntries.map(([key, data]) => (
        <StarterPicker
          key={key}
          id={key as StarterId}
          initialState={data.initialState}
        />
      ))}
    </PickerPanelCategoryContainer>
  );
}

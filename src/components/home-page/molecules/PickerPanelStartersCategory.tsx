import { StarterId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { StarterPicker } from "../../shared/blocks/starters/GenericStarter";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";
import PickerPanelDisabledBlock from "../atoms/PickerPanelDisabledBlock";

const startersAsEntries = Object.entries(ASSOCIATIONS.starters);

export default function PickerPanelStartersCategory() {
  return (
    <PickerPanelCategoryContainer title="Starters (one)">
      {startersAsEntries.map(([key, data]) => (
        <div className="flex flex-col items-start" key={key}>
          <StarterPicker
            id={key as StarterId}
            initialState={data.initialState}
          />
          {key === StarterId.All && <PickerPanelDisabledBlock />}
        </div>
      ))}
    </PickerPanelCategoryContainer>
  );
}

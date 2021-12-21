import { OperationId, SortId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { SortPicker } from "../../shared/blocks/sorts/GenericSort";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";

const entries = Object.entries(ASSOCIATIONS.sorts);

export default function PickerPanelSortsCategory() {
  return (
    <PickerPanelCategoryContainer title="Sorts (zero or one)">
      {entries.map(([key, data]) => (
        // @ts-ignore
        <SortPicker key={key} id={key as SortId} />
      ))}
    </PickerPanelCategoryContainer>
  );
}

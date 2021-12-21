import { OperationId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { OperationPicker } from "../../shared/blocks/operations/GenericOperation";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";

const entries = Object.entries(ASSOCIATIONS.operations);

export default function PickerPanelOperationsCategory() {
  return (
    <PickerPanelCategoryContainer title="Operations (one)">
      {entries.map(([key, data]) => (
        <OperationPicker
          key={key}
          id={key as OperationId}
          initialState={data.initialState}
        />
      ))}
    </PickerPanelCategoryContainer>
  );
}

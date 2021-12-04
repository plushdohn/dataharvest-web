import { SubjectId } from "shared/types";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { SubjectPicker } from "../../shared/blocks/subjects/GenericSubject";
import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";

const subjectsAsEntries = Object.entries(ASSOCIATIONS.subjects);

export default function PickerPanelSubjectsCategory() {
  return (
    <PickerPanelCategoryContainer title="Subjects (zero or one)">
      {subjectsAsEntries.map(([key, data]) => (
        <SubjectPicker
          key={key}
          id={key as SubjectId}
          initialState={data.initialState}
        />
      ))}
    </PickerPanelCategoryContainer>
  );
}

import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";
import { ASSOCIATIONS } from "../../shared/blocks/associations";
import { FilterPicker } from "../../shared/blocks/filters/GenericFilter";
import { FilterId } from "shared/types";

const filtersAsEntries = Object.entries(ASSOCIATIONS.filters);

export default function PickerPanelFiltersCategory() {
  return (
    <PickerPanelCategoryContainer title="Filters (zero or more)">
      {filtersAsEntries.map(([key, data]) => (
        <FilterPicker
          key={key}
          id={key as FilterId}
          initialState={data.initialState}
        />
      ))}
    </PickerPanelCategoryContainer>
  );
}

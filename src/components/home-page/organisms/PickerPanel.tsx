import PickerPanelCategoryContainer from "../atoms/PickerPanelCategoryContainer";
import PickerPanelFiltersCategory from "../molecules/PickerPanelFiltersCategory";
import PickerPanelGroupsCategory from "../molecules/PickerPanelGroupsCategory";
import PickerPanelOperationsCategory from "../molecules/PickerPanelOperationsCategory";
import PickerPanelSortsCategory from "../molecules/PickerPanelSortsCategory";
import PickerPanelStartersCategory from "../molecules/PickerPanelStartersCategory";
import PickerPanelSubjectsCategory from "../molecules/PickerPanelSubjectsCategory";

export default function PickerPanel() {
  return (
    <div className="flex-shrink-1 border-r border-gray-800 overflow-y-auto p-4 hidden lg:flex flex-col items-start">
      <PickerPanelStartersCategory />
      <PickerPanelFiltersCategory />
      <PickerPanelSubjectsCategory />
      <PickerPanelGroupsCategory />
      <PickerPanelOperationsCategory />
      <PickerPanelSortsCategory />
    </div>
  );
}

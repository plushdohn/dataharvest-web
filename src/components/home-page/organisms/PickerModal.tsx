import PickerModalClosingButton from "../molecules/PickerModalClosingButton";
import PickerPanelFiltersCategory from "../molecules/PickerPanelFiltersCategory";
import PickerPanelGroupsCategory from "../molecules/PickerPanelGroupsCategory";
import PickerPanelOperationsCategory from "../molecules/PickerPanelOperationsCategory";
import PickerPanelSortsCategory from "../molecules/PickerPanelSortsCategory";
import PickerPanelStartersCategory from "../molecules/PickerPanelStartersCategory";
import PickerPanelSubjectsCategory from "../molecules/PickerPanelSubjectsCategory";

export default function PickerModal() {
  return (
    <div className="absolute w-full h-full flex flex-col bg-gray-900 p-4 overflow-y-scroll">
      <PickerModalClosingButton />
      <PickerPanelStartersCategory />
      <PickerPanelFiltersCategory />
      <PickerPanelSubjectsCategory />
      <PickerPanelGroupsCategory />
      <PickerPanelOperationsCategory />
      <PickerPanelSortsCategory />
    </div>
  );
}

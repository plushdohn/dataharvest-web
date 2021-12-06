import { RootState } from "@/src/store";
import { hidePickerModal } from "@/src/store/uiReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PickerModalClosingButton from "../molecules/PickerModalClosingButton";
import PickerPanelFiltersCategory from "../molecules/PickerPanelFiltersCategory";
import PickerPanelGroupsCategory from "../molecules/PickerPanelGroupsCategory";
import PickerPanelOperationsCategory from "../molecules/PickerPanelOperationsCategory";
import PickerPanelSortsCategory from "../molecules/PickerPanelSortsCategory";
import PickerPanelStartersCategory from "../molecules/PickerPanelStartersCategory";
import PickerPanelSubjectsCategory from "../molecules/PickerPanelSubjectsCategory";

export default function PickerModal() {
  return (
    <div className="absolute w-full h-full flex flex-col p-4 overflow-y-scroll bg-gray-900">
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

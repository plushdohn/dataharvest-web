import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import QueryBottomSection from "../molecules/QueryBottomSection";
import QueryRenderer from "../molecules/QueryRenderer";
import PickerModal from "./PickerModal";

export default function QueryCanvas() {
  const pickerModalOpen = useSelector(
    (state: RootState) => state.ui.pickerModalOpen
  );

  return (
    <div className="w-full lg:w-1/2 p-4">
      <QueryRenderer />
      <QueryBottomSection />
    </div>
  );
}

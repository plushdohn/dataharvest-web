import { RootState } from "@/src/store";
import { hidePickerModal, showPickerModal } from "@/src/store/uiReducer";
import { useDispatch, useSelector } from "react-redux";

export default function QueryCanvasAddBlocksButton() {
  const dispatch = useDispatch();

  const pickerModalOpen = useSelector(
    (state: RootState) => state.ui.pickerModalOpen
  );

  function handleClick() {
    if (pickerModalOpen) dispatch(hidePickerModal());
    else dispatch(showPickerModal());
  }

  return (
    <button
      className="lg:hidden flex items-center justify-center py-1.5 hover:bg-gray-700 bg-gray-800 rounded mt-4 w-full text-sm text-white"
      onClick={handleClick}
    >
      <span>Add Blocks</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-white ml-2"
      >
        <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" />
      </svg>
    </button>
  );
}

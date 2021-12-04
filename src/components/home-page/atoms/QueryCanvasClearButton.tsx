import { resetQuery } from "@/src/store/queryReducer";
import { useDispatch } from "react-redux";
import QueryCanvasClearIcon from "./QueryCanvasClearIcon";

export default function QueryCanvasClearButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetQuery());
  }

  return (
    <button
      onClick={handleClick}
      className="py-1.5 px-4 text-white text-sm bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center"
    >
      <span className="mr-2">Reset</span>
      <QueryCanvasClearIcon />
    </button>
  );
}

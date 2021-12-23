import Spinner from "../../shared/atoms/Spinner";
import PlayArrowIcon from "./QueryCanvasPlayArrowIcon";

export default function QueryCanvasRunButton(props: {
  loading: boolean;
  disabled: boolean;
  callback: () => void;
  className?: string;
}) {
  function handleClick() {
    if (props.disabled) return;

    props.callback();
  }

  return (
    <button
      className={`py-1.5 px-4 text-sm bg-gray-800 rounded flex justify-center items-center ${
        props.disabled || props.loading
          ? "cursor-not-allowed text-gray-400"
          : "cursor-pointer text-white hover:bg-gray-700"
      } ${props.className ?? ""}`}
      onClick={handleClick}
    >
      {props.loading ? (
        <>
          <span>Running...</span>
          <Spinner sizeClassnameOverride="w-6 h-6" className="ml-2" />
        </>
      ) : (
        <>
          <span>Run</span>
          <PlayArrowIcon />
        </>
      )}
    </button>
  );
}

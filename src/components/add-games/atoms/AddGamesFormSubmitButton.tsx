export default function AddGamesFormSubmitButton(props: {
  callback: () => void;
  disabled?: boolean;
}) {
  function handleClick() {
    if (!props.disabled) props.callback();
  }

  return (
    <button
      className={`self-start px-4 text-sm rounded mt-8 py-1.5 text-white ${
        props.disabled
          ? "bg-gray-700 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-500"
      }`}
      onClick={handleClick}
      disabled={props.disabled}
    >
      Submit
    </button>
  );
}

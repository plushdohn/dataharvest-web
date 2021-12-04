export default function NavBarGenericButtonContainer(props: {
  children: JSX.Element | JSX.Element[];
  callback: () => void;
}) {
  return (
    <button
      className="py-2 mt-2 w-16 hover:bg-gray-800 rounded flex flex-col items-center"
      onClick={props.callback}
    >
      {props.children}
    </button>
  );
}

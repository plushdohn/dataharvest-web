export default function Spinner(props: {
  sizeClassnameOverride?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={`${
        props.sizeClassnameOverride ?? "w-10 h-10"
      } stroke-current text-gray-700 fill-none animate-spin ${
        props.className ?? ""
      }`}
    >
      <circle cx="25" cy="25" r="20" strokeWidth={5} fill="none"></circle>
      <circle
        cx="25"
        cy="25"
        r="20"
        strokeWidth={5}
        className="stroke-current text-gray-500"
        fill="none"
        strokeDashoffset={40}
        strokeDasharray={120}
        strokeLinecap="round"
      ></circle>
    </svg>
  );
}

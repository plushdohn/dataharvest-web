export default function PlayArrowIcon(props: { colorClass?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-6 h-6 fill-current ${
        props.colorClass ? props.colorClass : "text-green-500"
      }`}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

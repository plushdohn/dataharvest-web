export default function OutputSingleValue(props: {
  label: string;
  value: number;
}) {
  return (
    <div key={props.label} className="mb-3">
      <span className="block text-gray-400 text-sm font-semibold">
        {props.label}
      </span>
      <span className="text-white font-semibold text-xl break-all">
        {Math.round(props.value * 100) / 100}
      </span>
    </div>
  );
}

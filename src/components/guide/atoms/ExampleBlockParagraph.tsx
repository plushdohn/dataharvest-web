export default function ExampleBlockText(props: {
  children: string | JSX.Element | (JSX.Element | string)[];
  className?: string;
}) {
  return (
    <div className={`rounded-sm mb-4 ${props.className ?? ""}`}>
      <span className="text-gray-400 text-sm">{props.children}</span>
    </div>
  );
}

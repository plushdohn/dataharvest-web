export default function ExampleBlock(props: {
  children: string | JSX.Element | (JSX.Element | string)[];
}) {
  return (
    <div className="w-full p-4 border border-gray-800 my-4 rounded">
      {props.children}
    </div>
  );
}

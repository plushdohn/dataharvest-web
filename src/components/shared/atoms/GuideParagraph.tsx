export default function GenericParagraph(props: {
  children: string | JSX.Element | (JSX.Element | string)[];
}) {
  return <span className="text-gray-400">{props.children}</span>;
}

export default function GenericSectionSubtitle(props: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return <h2 className="text-white font-semibold mb-2">{props.children}</h2>;
}

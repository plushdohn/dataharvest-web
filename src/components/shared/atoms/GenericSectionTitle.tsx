export default function GenericSectionTitle(props: {
  children: JSX.Element | JSX.Element[] | string;
}) {
  return (
    <h1 className="text-xl text-white font-bold mb-4">{props.children}</h1>
  );
}

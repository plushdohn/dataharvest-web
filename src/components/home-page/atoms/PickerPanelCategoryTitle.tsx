export default function PickerPanelCategoryTitle(props: {
  children: React.ReactChild;
}) {
  return (
    <span className="block text-white font-semibold mb-4">
      {props.children}
    </span>
  );
}

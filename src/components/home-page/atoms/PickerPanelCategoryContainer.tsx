import PickerPanelCategoryTitle from "./PickerPanelCategoryTitle";

export default function PickerPanelCategoryContainer(props: {
  title: string;
  children: React.ReactChild | React.ReactChild[];
}) {
  return (
    <div className="mb-8">
      <PickerPanelCategoryTitle>{props.title}</PickerPanelCategoryTitle>
      {props.children}
    </div>
  );
}

import CheckboxInputForBlocks from "@/components/CheckboxInputForBlocks";

export default function AverageCSSort(props: {
  asc: boolean;
  setAsc: (n: boolean) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setAsc(e.currentTarget.checked);
  }

  return (
    <>
      <span>
        Sort by average CS (ascending?
        <CheckboxInputForBlocks onChange={handleChange} checked={props.asc} />)
      </span>
    </>
  );
}

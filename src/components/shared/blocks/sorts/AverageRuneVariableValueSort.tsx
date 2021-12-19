import CheckboxInputForBlocks from "../../atoms/CheckboxInputForBlocks";

export default function AverageRunVariableValueSort(props: {
  args: boolean;
  setArgs: (n: boolean) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setArgs(e.currentTarget.checked);
  }

  return (
    <span>
      Sort by average rune variable value (ascending?
      <CheckboxInputForBlocks onChange={handleChange} checked={props.args} />)
    </span>
  );
}

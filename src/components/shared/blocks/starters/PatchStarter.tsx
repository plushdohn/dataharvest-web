import SelectInputForBlocks from "../../../SelectInputForBlocks";

export default function PatchStarter(props: {
  args: string;
  setArgs: (n: string) => any;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setArgs(e.target.value);
  };

  return (
    <>
      <span>Use games from patch&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={props.args}>
        <option value="11.24">11.24</option>
      </SelectInputForBlocks>
    </>
  );
}

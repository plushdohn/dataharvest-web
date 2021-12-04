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
      <span>Use games from patch</span>
      <SelectInputForBlocks onChange={handleChange} value={props.args}>
        <option value="11.21">11.21</option>
        <option value="11.22">11.22</option>
        <option value="11.23">11.23</option>
      </SelectInputForBlocks>
    </>
  );
}

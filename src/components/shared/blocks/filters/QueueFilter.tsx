import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

export default function QueueFilter({
  args,
  setArgs,
}: {
  args: number;
  setArgs: (n: number) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(parseInt(e.target.value));
  }

  return (
    <>
      <span>Only games from queue&nbsp;</span>
      <SelectInputForBlocks value={args.toString()} onChange={handleChange}>
        <option value="420">Ranked Solo/Duo</option>
        <option value="440">Ranked Flex</option>
      </SelectInputForBlocks>
    </>
  );
}

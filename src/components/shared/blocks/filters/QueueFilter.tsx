import SelectInputForBlocks from "../../../SelectInputForBlocks";

export default function QueueFilter(props: {
  args: number;
  setArgs: (n: number) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs(parseInt(e.target.value));
  }

  return (
    <>
      <span>Only games from queue</span>
      <SelectInputForBlocks
        value={props.args.toString()}
        onChange={handleChange}
      >
        <option value="420">Ranked Solo/Duo</option>
        <option value="440">Ranked Flex</option>
        <option value="430">Blind pick</option>
        <option value="400">Draft pick</option>
      </SelectInputForBlocks>
    </>
  );
}

import SelectInputForBlocks from "@/src/components/SelectInputForBlocks";
import TextInputForBlocks from "@/src/components/TextInputForBlocks";

export default function SummonerInTeamFilter(props: {
  args: [string, number];
  setArgs: (n: [string, number]) => any;
}) {
  function handleSummonerChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setArgs([e.currentTarget.value, props.args[1]]);
  }

  function handleTeamChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([props.args[0], parseInt(e.currentTarget.value)]);
  }

  return (
    <div>
      <span>Only games where summoner&nbsp;</span>
      <TextInputForBlocks
        onChange={handleSummonerChange}
        value={props.args[0]}
      />
      <span>&nbsp;is playing team color&nbsp; </span>
      <SelectInputForBlocks onChange={handleTeamChange} value={props.args[1]}>
        <option value={100}>BLUE</option>
        <option value={200}>RED</option>
      </SelectInputForBlocks>
    </div>
  );
}
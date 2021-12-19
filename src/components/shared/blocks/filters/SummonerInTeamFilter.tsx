import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import TextInputForBlocks from "@/src/components/shared/atoms/TextInputForBlocks";

export default function SummonerInTeamFilter({
  args,
  setArgs,
}: {
  args: [string, number];
  setArgs: (n: [string, number]) => any;
}) {
  function handleSummonerChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArgs([e.currentTarget.value, args[1]]);
  }

  function handleTeamChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs([args[0], parseInt(e.currentTarget.value)]);
  }

  return (
    <div>
      <span>Only games where summoner&nbsp;</span>
      <TextInputForBlocks onChange={handleSummonerChange} value={args[0]} />
      <span>&nbsp;is in team&nbsp;</span>
      <SelectInputForBlocks onChange={handleTeamChange} value={args[1]}>
        <option value={100}>BLUE</option>
        <option value={200}>RED</option>
      </SelectInputForBlocks>
    </div>
  );
}

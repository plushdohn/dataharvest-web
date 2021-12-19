import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import TextInputForBlocks from "@/src/components/shared/atoms/TextInputForBlocks";

export default function SummonerInRoleFilter({
  args,
  setArgs,
}: {
  args: [string, string];
  setArgs: (n: [string, string]) => any;
}) {
  function handleSummonerChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArgs([e.currentTarget.value, args[1]]);
  }

  function handleRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs([args[0], e.currentTarget.value]);
  }

  return (
    <>
      <span>Only games where summoner&nbsp;</span>
      <TextInputForBlocks
        onChange={handleSummonerChange}
        value={args[0]}
        className="mr-1"
      />
      <span>is playing role&nbsp;</span>
      <SelectInputForBlocks onChange={handleRoleChange} value={args[1]}>
        <option value="TOP">Top</option>
        <option value="JUNGLE">Jungle</option>
        <option value="MIDDLE">Mid</option>
        <option value="BOTTOM">ADC</option>
        <option value="UTILITY">Support</option>
      </SelectInputForBlocks>
    </>
  );
}

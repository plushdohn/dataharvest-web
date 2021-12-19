import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";

export default function RegionFilter({
  args,
  setArgs,
}: {
  args: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(e.target.value);
  }

  return (
    <>
      <span>Only games from region&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={args}>
        <option value="EUW1">EUW</option>
        <option value="KR">KR</option>
        <option value="NA1">NA</option>
        <option value="EUN1">EUNE</option>
        <option value="JP1">JP</option>
        <option value="BR1">BR</option>
        <option value="RU">RU</option>
        <option value="TR1">TR</option>
        <option value="OC1">OC</option>
        <option value="LA1">LAN</option>
        <option value="LA2">LAS</option>
      </SelectInputForBlocks>
    </>
  );
}

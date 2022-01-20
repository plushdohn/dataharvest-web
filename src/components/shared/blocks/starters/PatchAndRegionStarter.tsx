import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

type Props = {
  args: [string, string];
  setArgs: (n: [string, string]) => void;
};

export default function PatchAndRegionStarter({ args, setArgs }: Props) {
  const handlePatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArgs([e.target.value, args[1]]);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArgs([args[0], e.target.value]);
  };

  return (
    <>
      <span>Use games from patch&nbsp;</span>
      <SelectInputForBlocks onChange={handlePatchChange} value={args[0]}>
        <option value="12.2">12.2</option>
        <option value="12.1">12.1</option>
        <option value="11.24">11.24</option>
      </SelectInputForBlocks>
      &nbsp;
      <span>and region&nbsp;</span>
      <SelectInputForBlocks onChange={handleRegionChange} value={args[1]}>
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

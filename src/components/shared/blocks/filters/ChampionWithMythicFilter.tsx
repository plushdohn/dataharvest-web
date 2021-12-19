import { useSelector } from "react-redux";
import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import { RootState } from "@/src/store";

export default function ChampionWithMythicFilter({
  args,
  setArgs,
}: {
  args: [string, string];
  setArgs: (n: [string, string]) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChampionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs([e.target.value, args[1]]);
  }

  function handleMythicChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setArgs([args[0], e.target.value]);
  }

  return (
    <>
      <span>Only games where champion&nbsp;</span>
      <SelectInputForBlocks
        onChange={handleChampionChange}
        value={args[0]}
        className="mr-1"
      >
        {Object.entries(ddragon.champions).map(([key, data]) => (
          <option value={key} key={key}>
            {data.name}
          </option>
        ))}
      </SelectInputForBlocks>
      <span>has mythic&nbsp;</span>
      <SelectInputForBlocks
        onChange={handleMythicChange}
        value={args[1].toString()}
      >
        {ddragon.mythics.map((mythic) => (
          <option value={mythic} key={mythic}>
            {mythic}
          </option>
        ))}
      </SelectInputForBlocks>
    </>
  );
}

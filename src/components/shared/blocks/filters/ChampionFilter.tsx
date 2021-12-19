import { useSelector } from "react-redux";
import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import { RootState } from "@/src/store";

export default function ChampionFilter({
  args,
  setArgs,
}: {
  args: string;
  setArgs: (n: string) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(e.target.value);
  }

  return (
    <>
      <span>Only games with champion&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={args}>
        {Object.entries(ddragon.champions).map(([key, data]) => (
          <option value={key} key={key}>
            {data.name}
          </option>
        ))}
      </SelectInputForBlocks>
    </>
  );
}

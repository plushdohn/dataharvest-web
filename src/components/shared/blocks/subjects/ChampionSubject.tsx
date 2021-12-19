import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

export default function ChampionSubject({
  args = "Aatrox",
  setArgs,
}: {
  args?: string;
  setArgs: (n: string) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Regarding champion&nbsp;</span>
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

import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

export default function KeystoneSubject({
  args,
  setArgs,
}: {
  args: number;
  setArgs: (n: number) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(parseInt(e.currentTarget.value));
  }

  return (
    <>
      <span>Regarding keystone&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={args}>
        {ddragon.keystoneIds.map((id) => (
          <option value={id} key={id}>
            {ddragon.runes[id].name}
          </option>
        ))}
      </SelectInputForBlocks>
    </>
  );
}

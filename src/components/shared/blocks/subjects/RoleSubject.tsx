import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

export default function RoleSubject({
  args = "TOP",
  setArgs,
}: {
  args?: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Regarding role&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={args}>
        <option value="TOP">Top</option>
        <option value="JUNGLE">Jungle</option>
        <option value="MIDDLE">Mid</option>
        <option value="BOTTOM">ADC</option>
        <option value="UTILITY">Support</option>
      </SelectInputForBlocks>
    </>
  );
}

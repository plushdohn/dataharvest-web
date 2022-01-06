import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

type Props = {
  args: string;
  setArgs: (n: string) => void;
};

export default function PatchStarter({ args, setArgs }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArgs(e.target.value);
  };

  return (
    <>
      <span>Use games from patch&nbsp;</span>
      <SelectInputForBlocks onChange={handleChange} value={args}>
        <option value="12.1">12.1</option>
        <option value="11.24">11.24</option>
      </SelectInputForBlocks>
    </>
  );
}

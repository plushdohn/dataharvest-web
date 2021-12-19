import CheckboxInputForBlocks from "@/src/components/shared/atoms/CheckboxInputForBlocks";

export default function AverageGoldSpentSort({
  args,
  setArgs,
}: {
  args: boolean;
  setArgs: (n: boolean) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArgs(e.currentTarget.checked);
  }

  return (
    <>
      <span>
        Sort by average gold spent (ascending?
        <CheckboxInputForBlocks onChange={handleChange} checked={args} />)
      </span>
    </>
  );
}

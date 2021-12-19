import TextInputForBlocks from "@/src/components/shared/atoms/TextInputForBlocks";

export default function SummonerFilter({
  args,
  setArgs,
}: {
  args: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Only games with summoner&nbsp;</span>
      <TextInputForBlocks value={args} onChange={handleChange} />
    </>
  );
}

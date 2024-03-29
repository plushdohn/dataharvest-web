import TextInputForBlocks from "@/src/components/shared/atoms/TextInputForBlocks";

export default function SummonerSubject({
  args = "hide on bush",
  setArgs,
}: {
  args?: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Regarding summoner&nbsp;</span>
      <TextInputForBlocks value={args} onChange={handleChange} />
    </>
  );
}

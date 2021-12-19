import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import { RootState } from "@/src/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function ChampionWithRuneFilter({
  args,
  setArgs,
}: {
  args: [string, number];
  setArgs: (n: [string, number]) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChampionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs([e.target.value, args[1]]);
  }

  function handleRuneChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs([args[0], parseInt(e.target.value)]);
  }

  const runes = useMemo(() => {
    return Object.entries(ddragon.runes).sort(([aKey, aRune], [bKey, bRune]) =>
      aRune.name > bRune.name ? 1 : -1
    );
  }, [ddragon]);

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
      <span>has rune&nbsp;</span>
      <SelectInputForBlocks
        onChange={handleRuneChange}
        value={args[1].toString()}
      >
        {runes.map(([runeKey, rune]) => (
          <option value={runeKey} key={runeKey}>
            {rune.name}
          </option>
        ))}
      </SelectInputForBlocks>
    </>
  );
}

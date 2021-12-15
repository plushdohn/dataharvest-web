import SelectInputForBlocks from "@/src/components/SelectInputForBlocks";
import { RootState } from "@/src/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function ChampionWithRuneFilter(props: {
  args: [string, number];
  setArgs: (n: [string, number]) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChampionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([e.target.value, props.args[1]]);
  }

  function handleMythicChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    props.setArgs([props.args[0], parseInt(e.target.value)]);
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
        value={props.args[0]}
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
        onChange={handleMythicChange}
        value={props.args[1].toString()}
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

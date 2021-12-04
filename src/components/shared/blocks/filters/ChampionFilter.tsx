import React from "react";
import { useSelector } from "react-redux";
import SelectInputForBlocks from "@/components/SelectInputForBlocks";
import { RootState } from "@/src/store";

export default function ChampionFilter(props: {
  args: string;
  setArgs: (n: string) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs(e.target.value);
  }

  return (
    <>
      <span>Only games with champion</span>
      <SelectInputForBlocks onChange={handleChange} value={props.args}>
        {Object.entries(ddragon.champions).map(([key, data]) => (
          <option value={key} key={key}>
            {data.name}
          </option>
        ))}
      </SelectInputForBlocks>
    </>
  );
}

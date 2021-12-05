import React from "react";
import { useSelector } from "react-redux";
import SelectInputForBlocks from "@/components/SelectInputForBlocks";
import { RootState } from "@/src/store";

export default function ChampionWithMythicFilter(props: {
  args: [string, string];
  setArgs: (n: [string, string]) => any;
}) {
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  function handleChampionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([e.target.value, props.args[1]]);
  }

  function handleMythicChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    props.setArgs([props.args[0], e.target.value]);
  }

  return (
    <div>
      <span>Only games where champion</span>
      <SelectInputForBlocks
        onChange={handleChampionChange}
        value={props.args[0]}
      >
        {Object.entries(ddragon.champions).map(([key, data]) => (
          <option value={key} key={key}>
            {data.name}
          </option>
        ))}
      </SelectInputForBlocks>
      <div className="mt-2">
        <span>has mythic</span>
        <SelectInputForBlocks
          onChange={handleMythicChange}
          value={props.args[1].toString()}
        >
          {ddragon.mythics.map((mythic) => (
            <option value={mythic} key={mythic}>
              {mythic}
            </option>
          ))}
        </SelectInputForBlocks>
      </div>
    </div>
  );
}

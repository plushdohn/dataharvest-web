import SelectInputForBlocks from "@/src/components/SelectInputForBlocks";
import TextInputForBlocks from "@/src/components/TextInputForBlocks";
import React from "react";

export default function SummonerInRoleFilter(props: {
  args: [string, string];
  setArgs: (n: [string, string]) => any;
}) {
  function handleSummonerChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setArgs([e.currentTarget.value, props.args[1]]);
  }

  function handleRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([props.args[0], e.currentTarget.value]);
  }

  return (
    <>
      <span>Only games where summoner</span>
      <TextInputForBlocks
        onChange={handleSummonerChange}
        value={props.args[0]}
        className="mr-2"
      />
      <span>is playing role</span>
      <SelectInputForBlocks onChange={handleRoleChange} value={props.args[1]}>
        <option value="TOP">Top</option>
        <option value="JUNGLE">Jungle</option>
        <option value="MIDDLE">Mid</option>
        <option value="BOTTOM">ADC</option>
        <option value="UTILITY">Support</option>
      </SelectInputForBlocks>
    </>
  );
}

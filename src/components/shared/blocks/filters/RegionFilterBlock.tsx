import SelectInputForBlocks from "@/components/SelectInputForBlocks";
import React from "react";

export default function RegionFilter(props: {
  args: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs(e.target.value);
  }

  return (
    <>
      <span>Only games from region</span>
      <SelectInputForBlocks onChange={handleChange} value={props.args}>
        <option value="EUW1">EUW</option>
        <option value="KR">KR</option>
        <option value="NA1">NA</option>
        <option value="EUN1">EUNE</option>
        <option value="JP1">JP</option>
        <option value="BR1">BR</option>
        <option value="RU">RU</option>
        <option value="TR1">TR</option>
        <option value="OC1">OC</option>
        <option value="LA1">LA1</option>
        <option value="LA2">LA2</option>
      </SelectInputForBlocks>
    </>
  );
}

import React from "react";
import SelectInputForBlocks from "../../../SelectInputForBlocks";

export default function RoleSubject(props: {
  args: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Regarding role</span>
      <SelectInputForBlocks onChange={handleChange} value={props.args}>
        <option value="TOP">Top</option>
        <option value="JUNGLE">Jungle</option>
        <option value="MIDDLE">Mid</option>
        <option value="BOTTOM">ADC</option>
        <option value="UTILITY">Support</option>
      </SelectInputForBlocks>
    </>
  );
}

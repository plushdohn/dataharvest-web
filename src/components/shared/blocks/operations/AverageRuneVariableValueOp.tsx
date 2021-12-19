import React from "react";
import SelectInputForBlocks from "../../atoms/SelectInputForBlocks";

export default function AverageRuneVariableValueOp(props: {
  args: [string, string];
  setArgs: (n: [string, string]) => void;
}) {
  function handleRuneChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([e.currentTarget.value, props.args[1]]);
  }

  function handleVariableChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setArgs([props.args[0], e.currentTarget.value]);
  }

  return (
    <span>
      Get average rune{" "}
      <SelectInputForBlocks
        value="primary.keystone"
        onChange={handleRuneChange}
      >
        <option value="primary.keystone">Keystone</option>
        <option value="primary.rune1">Rune 2</option>
        <option value="primary.rune2">Rune 3</option>
        <option value="primary.rune3">Rune 4</option>
        <option value="secondary.rune1">Sub-rune 1</option>
        <option value="secondary.rune2">Sub-rune 2</option>
      </SelectInputForBlocks>{" "}
      variable{" "}
      <SelectInputForBlocks value="var1" onChange={handleVariableChange}>
        <option value="var1">1</option>
        <option value="var2">2</option>
        <option value="var3">3</option>
      </SelectInputForBlocks>{" "}
      value
    </span>
  );
}

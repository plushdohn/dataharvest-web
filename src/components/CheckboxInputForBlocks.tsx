import React from "react";

export default function CheckboxInputForBlocks(props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  checked: boolean;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();

    props.onChange(e);
  }

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}

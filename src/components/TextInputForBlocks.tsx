import React from "react";

export default function TextInputForBlocks(props: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  className?: string;
}) {
  function clickHandler(e: React.MouseEvent<HTMLInputElement>) {
    e.stopPropagation();
  }

  return (
    <input
      value={props.value}
      onChange={props.onChange}
      onClick={clickHandler}
      type="text"
      className={`ml-2 rounded text-black p-1 w-16 ${props.className ?? ""}`}
    />
  );
}

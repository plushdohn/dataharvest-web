import React from "react";

export default function SelectInputForBlocks(props: {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
  value: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLSelectElement>) {
    e.stopPropagation();
  }

  return (
    <select
      className={`p-1 rounded text-black ml-2 ${
        props.className ? props.className : ""
      }`}
      onClick={handleClick}
      onChange={props.onChange}
      value={props.value}
    >
      {props.children}
    </select>
  );
}

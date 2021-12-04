import React from "react";

export default function AddGamesFormNameInput(props: {
  value: string;
  callback: (n: string) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.callback(e.currentTarget.value);
  }

  return (
    <input
      type="text"
      className="rounded p-1 text-sm ml-2 w-full"
      value={props.value}
      onChange={handleChange}
    />
  );
}

import React from "react";
import TextInputForBlocks from "@/components/TextInputForBlocks";

export default function SummonerFilter(props: {
  args: string;
  setArgs: (n: string) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setArgs(e.currentTarget.value);
  }

  return (
    <>
      <span>Only games with summoner&nbsp;</span>
      <TextInputForBlocks value={props.args} onChange={handleChange} />
    </>
  );
}

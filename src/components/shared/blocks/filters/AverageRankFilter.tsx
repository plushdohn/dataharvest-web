import { useSelector } from "react-redux";
import SelectInputForBlocks from "@/src/components/shared/atoms/SelectInputForBlocks";
import { RootState } from "@/src/store";

export default function AverageRankFilter({
  args,
  setArgs,
}: {
  args: number;
  setArgs: (n: number) => any;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setArgs(parseInt(e.target.value));
  }

  return (
    <>
      <span>Only games where average rank is at least &nbsp;</span>
      <SelectInputForBlocks
        className="w-32"
        onChange={handleChange}
        value={args}
      >
        <option value={0}>Iron IV</option>
        <option value={1}>Iron III</option>
        <option value={2}>Iron II</option>
        <option value={3}>Iron I</option>
        <option value={4}>Bronze IV</option>
        <option value={5}>Bronze III</option>
        <option value={6}>Bronze II</option>
        <option value={7}>Bronze I</option>
        <option value={8}>Silver IV</option>
        <option value={9}>Silver III</option>
        <option value={10}>Silver II</option>
        <option value={11}>Silver I</option>
        <option value={12}>Gold IV</option>
        <option value={13}>Gold III</option>
        <option value={14}>Gold II</option>
        <option value={15}>Gold I</option>
        <option value={16}>Platinum IV</option>
        <option value={17}>Platinum III</option>
        <option value={18}>Platinum II</option>
        <option value={19}>Platinum I</option>
        <option value={20}>Diamond IV</option>
        <option value={21}>Diamond III</option>
        <option value={22}>Diamond II</option>
        <option value={23}>Diamond I</option>
        <option value={24}>Master</option>
        <option value={25}>Grandmaster</option>
        <option value={26}>Challenger</option>
      </SelectInputForBlocks>
    </>
  );
}

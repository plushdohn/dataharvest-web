export default function AddGamesFormRegionSelect(props: {
  value: string;
  callback: (val: string) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.callback(e.currentTarget.value);
  }

  return (
    <select
      className="rounded p-1 text-sm"
      value={props.value}
      onChange={handleChange}
    >
      <option value="EUW">EUW</option>
      <option value="EUNE">EUNE</option>
      <option value="KR">KR</option>
      <option value="NA">NA</option>
      <option value="OC">OC</option>
      <option value="JP">JP</option>
      <option value="RU">RU</option>
      <option value="BR">BR</option>
      <option value="TR">TR</option>
      <option value="LA1">LAN</option>
      <option value="LA2">LAS</option>
    </select>
  );
}

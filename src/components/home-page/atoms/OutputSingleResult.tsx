import { VALUES_DICTIONARY_EN } from "shared/dictionaries";
import { OperationField } from "shared/types";
import OutputSingleValue from "./OutputSinglevalue";

export default function OutputSingleResult(props: {
  name: string;
  imageUrl?: string;
  values: {
    [key in OperationField]: number;
  };
}) {
  return (
    <div className="mb-4 flex flex-col bg-gray-800 rounded w-full">
      <div className="p-3 border-b-2 border-gray-900 flex items-center">
        {props.imageUrl && (
          <img src={props.imageUrl} className="w-7 h-7 rounded-full mr-3" />
        )}
        <span className="text-white font-semibold">
          {props.name} (samples: {props.values.gamesCount})
        </span>
      </div>
      <div className="p-3 pb-0">
        {Object.entries(props.values)
          .filter(([key]) => key !== "gamesCount")
          .map(([key, val]) => (
            <OutputSingleValue
              label={VALUES_DICTIONARY_EN[key as OperationField]}
              value={val}
              key={key}
            />
          ))}
      </div>
    </div>
  );
}

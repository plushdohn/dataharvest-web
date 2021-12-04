import Spinner from "../../shared/atoms/Spinner";

export default function AddGamesLoader() {
  return (
    <div className="flex items-center">
      <Spinner sizeClassnameOverride="w-8" />
      <span className="text-gray-500 ml-2 text-sm">Adding games...</span>
    </div>
  );
}

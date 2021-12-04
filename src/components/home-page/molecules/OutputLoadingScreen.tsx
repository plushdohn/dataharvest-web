import Spinner from "../../shared/atoms/Spinner";

export default function OutputLoadingScreen() {
  return (
    <div className="flex flex-col items-center my-8">
      <Spinner />
      <span className="text-gray-600 font-semibold block mt-4">
        Processing query...
      </span>
    </div>
  );
}

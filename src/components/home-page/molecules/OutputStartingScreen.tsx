export default function OutputStartingScreen() {
  return (
    <div className="border-2 border-gray-800 border-dashed rounded flex flex-col justify-center items-center w-full p-16 2xl:p-32 mb-2">
      <span className="font-semibold text-white text-center">
        Nothing to see yet
      </span>
      <span className="text-gray-600 font-semibold text-sm block mt-1 text-center">
        Your query results will appear here.
      </span>
    </div>
  );
}

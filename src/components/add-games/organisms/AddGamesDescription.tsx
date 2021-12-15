export default function AddGamesDescription() {
  return (
    <div className="flex flex-col max-w-lg">
      <span className="text-white font-semibold">
        Adding games to our database
      </span>
      <span className="text-gray-500 block mt-2">
        Enter a region and a summoner name to add{" "}
        <span className="font-semibold">their last 30 ranked games</span> to our
        database.
      </span>
    </div>
  );
}

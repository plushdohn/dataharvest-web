export default function OutputNoResultsIllustration() {
  return (
    <div className="w-full flex flex-col items-center p-4 lg:p-16">
      <img src="/images/blitz_04x.png" className="w-64" />
      <span className="text-gray-700 font-semibold block mt-8 text-center">
        Oops! Your query returned no results.
      </span>
    </div>
  );
}

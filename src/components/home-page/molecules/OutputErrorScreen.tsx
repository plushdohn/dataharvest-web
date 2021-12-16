import Image from "next/image";
export default function OutputErrorScreen() {
  return (
    <div className="w-full flex flex-col items-center p-4 lg:p-16">
      <img src="/images/blitz_04x.png" className="w-64" />
      <span className="text-gray-700 font-semibold block mt-8 text-center">
        Oops! An error occurred while processing your query! <br />
        This is usually an error on our end, but it could be your internet too
        so please check your connection.
      </span>
    </div>
  );
}

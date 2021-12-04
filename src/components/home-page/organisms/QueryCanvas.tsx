import QueryBottomSection from "../molecules/QueryBottomSection";
import QueryRenderer from "../molecules/QueryRenderer";

export default function QueryCanvas() {
  return (
    <div className="w-full xl:w-1/2 p-4">
      <QueryRenderer />
      <QueryBottomSection />
    </div>
  );
}

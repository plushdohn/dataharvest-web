import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import LegalLinks from "../atoms/LegalLinks";
import OutputLegalLinks from "../atoms/LegalLinks";
import OutputNoResultsIllustration from "../atoms/OutputNoResultsIllustration";
import OutputRiotLegalMessage from "../atoms/OutputRiotLegalMessage";
import OutputErrorScreen from "../molecules/OutputErrorScreen";
import OutputLoadingScreen from "../molecules/OutputLoadingScreen";
import OutputResultsScreen from "../molecules/OutputResultsScreen";
import OutputStartingScreen from "../molecules/OutputStartingScreen";

export default function OutputPanel() {
  const queryApi = useSelector((state: RootState) => state.queryApi);

  return (
    <div className="w-full p-4 flex flex-col items-center border-t border-gray-800 2xl:w-1/2 2xl:border-l overflow-y-auto">
      {queryApi.loading ? (
        <OutputLoadingScreen />
      ) : queryApi.error ? (
        <OutputErrorScreen />
      ) : !queryApi.data ? (
        <OutputStartingScreen />
      ) : queryApi.data.length === 0 ? (
        <OutputNoResultsIllustration />
      ) : (
        <OutputResultsScreen />
      )}
      <OutputRiotLegalMessage />
      <LegalLinks />
    </div>
  );
}

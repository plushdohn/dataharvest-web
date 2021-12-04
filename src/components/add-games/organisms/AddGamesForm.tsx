import React, { useMemo, useState } from "react";
import AddGamesFormNameInput from "../atoms/AddGamesFormNameInput";
import AddGamesFormRegionSelect from "../atoms/AddGamesFormRegionSelect";
import GenericCaptcha from "../../shared/atoms/GenericCaptcha";
import AddGamesFormSubmitButton from "../atoms/AddGamesFormSubmitButton";
import { addSummonersGamesToDatabase } from "@/src/services/add-games";
import AddGamesLoader from "../molecules/AddGamesLoader";
import AddGamesDoneScreen from "../molecules/AddGamesDoneScreen";

export default function AddGamesForm() {
  const [region, setRegion] = useState("EUW");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [summonerName, setSummonerName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleSubmit() {
    if (captcha === null) {
      return;
    }

    setLoading(true);

    try {
      const res = await addSummonersGamesToDatabase(
        region,
        summonerName,
        captcha
      );

      console.log(res);

      setDone(true);
    } catch (err: any) {
      setError(err.message as string);
    } finally {
      setLoading(false);
    }
  }

  const buttonDisabled = useMemo(
    () => summonerName.trim().length === 0 || captcha === null,
    [summonerName, captcha]
  );

  return (
    <div className="mt-8 inline-flex flex-col">
      {loading ? (
        <AddGamesLoader />
      ) : done ? (
        <AddGamesDoneScreen />
      ) : (
        <>
          <div className="mb-4 flex">
            <AddGamesFormRegionSelect value={region} callback={setRegion} />
            <AddGamesFormNameInput
              value={summonerName}
              callback={setSummonerName}
            />
          </div>
          <GenericCaptcha callback={setCaptcha} />
          <AddGamesFormSubmitButton
            callback={handleSubmit}
            disabled={buttonDisabled}
          />
          {error !== null && (
            <span className="text-red-500 text-xs mt-4">
              An error has occurred: {error}
            </span>
          )}
        </>
      )}
    </div>
  );
}

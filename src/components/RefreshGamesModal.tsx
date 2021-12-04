import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeRefreshModal } from "@/src/store/uiReducer";
import Spinner from "./Spinner";
import RefreshGamesCaptcha from "./RefreshGamesCaptcha";

export default function RefreshGamesModal() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [region, setRegion] = useState("EUW");

  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    setError(false);
  }

  function handleRegionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.currentTarget.value);
    setError(false);
  }

  function handleSubmit() {
    if (name && name.trim().length > 0) {
      setIsSubmitting(true);
      fetch(`/api/refresh/${region}/${name}`, {
        method: "PATCH",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error("Bad server response:" + res.status);
        })
        .then((json) => {
          setIsSubmitting(false);
          dispatch(closeRefreshModal());
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setIsSubmitting(false);
        });
    }
  }

  return (
    <div className="absolute left-0 top-0 w-full h-full bg-alphagray flex justify-center items-center">
      <div className="bg-gray-800 rounded flex flex-col">
        {isSubmitting ? (
          <div className="p-8 flex flex-col items-center justify-center">
            <Spinner />
            <span className="text-gray-500 font-semibold text-sm">
              Adding games...
            </span>
          </div>
        ) : (
          <>
            <div className="w-full p-2 flex justify-end">
              <button
                onClick={() => dispatch(closeRefreshModal())}
                className="text-gray-600 hover:text-gray-500 focus:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>
            </div>
            <div className="px-8 pb-8 pt-4 flex flex-col items-center content-center">
              <span className="text-center font-semibold text-white">
                Refresh games <br />{" "}
                <span className="text-gray-500 text-sm mt-1 block break-word w-72">
                  The last 50 games from this summoner will be added to our
                  database.
                </span>
              </span>
              <div className="flex items-center mt-8 w-full">
                <select
                  className="rounded p-1 text-sm"
                  value={region}
                  onChange={handleRegionChange}
                >
                  <option value="EUW">EUW</option>
                  <option value="EUNE">EUNE</option>
                  <option value="KR">KR</option>
                  <option value="NA">NA</option>
                  <option value="OC">OC</option>
                  <option value="JP">JP</option>
                  <option value="RU">RU</option>
                  <option value="BR">BR</option>
                  <option value="TR">TR</option>
                  <option value="LA1">LA1</option>
                  <option value="LA2">LA2</option>
                </select>
                <input
                  type="text"
                  placeholder="Name..."
                  className="ml-2 w-full rounded p-1 px-2 text-sm"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <RefreshGamesCaptcha />
              <button
                onClick={handleSubmit}
                className="text-sm mt-4 rounded py-1.5 bg-green-600 w-full font-semibold text-white hover:bg-green-500"
              >
                Submit
              </button>
              {error && (
                <span className="text-sm text-red-500 block mt-2">
                  An error occurred, please try again.
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

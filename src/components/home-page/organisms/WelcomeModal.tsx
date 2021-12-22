import { hideWelcomeModal } from "@/src/store/uiReducer";
import Link from "next/link";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function WelcomeModal() {
  const dispatch = useDispatch();

  const isFirstTimer = useMemo(() => {
    const stored = window.localStorage.getItem("LAST_WELCOME_MODAL_TIME");

    if (stored === null) return true;

    return false;
  }, []);

  function handleClosureClick() {
    window.localStorage.setItem(
      "LAST_WELCOME_MODAL_TIME",
      Date.now().toString()
    );

    dispatch(hideWelcomeModal());
  }

  return (
    <div className="absolute w-full h-full bg-alphagray flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-16 bg-gray-900 rounded w-96">
        <span className="text-white font-semibold text-center mb-2">
          {isFirstTimer
            ? `Looks like it's your first time.`
            : "It's been a while."}
        </span>
        <span className="text-gray-500 text-center">
          Would you like to add your match history to our database?
        </span>
        <Link href="/add-games">
          <a
            onClick={handleClosureClick}
            className="text-white rounded bg-green-600 hover:bg-green-500 py-2 text-center text-sm mt-8 w-full font-semibold"
          >
            Yes, I&apos;d like to add my games.
          </a>
        </Link>
        <button
          onClick={handleClosureClick}
          className="text-white text-sm mt-2 bg-gray-800 hover:bg-gray-700 w-full py-2 rounded"
        >
          No, I&apos;ll use other people&apos;s games.
        </button>
      </div>
    </div>
  );
}

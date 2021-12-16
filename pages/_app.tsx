import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store";
import NavBar from "@/src/components/shared/organisms/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen bg-gray-900 flex overflow-hidden">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

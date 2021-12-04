import AddGamesDescription from "@/src/components/add-games/organisms/AddGamesDescription";
import AddGamesForm from "@/src/components/add-games/organisms/AddGamesForm";
import Head from "next/head";

export default function AddGamesPage() {
  return (
    <>
      <Head>
        <title>Adding games - DataHarvest</title>
      </Head>
      <div className="w-full p-8">
        <AddGamesDescription />
        <AddGamesForm />
      </div>
    </>
  );
}

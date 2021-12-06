import AddGamesDescription from "@/src/components/add-games/organisms/AddGamesDescription";
import AddGamesForm from "@/src/components/add-games/organisms/AddGamesForm";
import Head from "next/head";

export default function AddGamesPage() {
  return (
    <>
      <Head>
        <title>Adding games - DataHarvest</title>
      </Head>
      <div className="flex flex-col items-start p-4 lg:p-8">
        <AddGamesDescription />
        <AddGamesForm />
      </div>
    </>
  );
}

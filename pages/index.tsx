import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { updateAllDataDragon } from "@/src/store/dataDragonReducer";
import QueryCanvas from "@/components/home-page/organisms/QueryCanvas";
import {
  getChampionDataForCurrentPatch,
  getItemDataForCurrentPatch,
  getRuneDataForCurrentPatch,
} from "utils/ddragon";
import { MYTHICS_SET } from "shared/dictionaries";
import PickerPanel from "@/src/components/home-page/organisms/PickerPanel";
import OutputPanel from "@/src/components/home-page/organisms/OutputPanel";

function Home() {
  return (
    <>
      <Head>
        <title>DataHarvest - LoL query builder, block editor</title>
      </Head>
      <div className="flex h-full min-h-0">
        <PickerPanel />
        <div className="w-1/2 md:w-full flex flex-col 2xl:flex-row h-full">
          <QueryCanvas />
          <OutputPanel />
        </div>
      </div>
    </>
  );
}

export default function HomeWrapper(
  p: InferGetStaticPropsType<typeof getStaticProps>
) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateAllDataDragon({
        champions: p.dataDragon.champions,
        runes: p.dataDragon.runes,
        items: p.dataDragon.items,
        mythics: p.dataDragon.mythics,
      })
    );
  }, []);

  return <Home />;
}

export async function getStaticProps() {
  const champions = await getChampionDataForCurrentPatch();
  const runes = await getRuneDataForCurrentPatch();
  const items = await getItemDataForCurrentPatch();

  return {
    props: {
      dataDragon: {
        champions,
        runes,
        items,
        mythics: [...MYTHICS_SET]
          .filter((mythId) => items[mythId] !== undefined)
          .map((el) => items[el].name),
      },
    },
  };
}

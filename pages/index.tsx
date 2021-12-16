import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import PickerModal from "@/src/components/home-page/organisms/PickerModal";
import { RootState } from "@/src/store";
import { useRouter } from "next/router";
import { decode } from "base2048";
import WelcomeModal from "@/src/components/home-page/organisms/WelcomeModal";
import { showWelcomeModal } from "@/src/store/uiReducer";

function Home() {
  const pickerModalOpen = useSelector(
    (state: RootState) => state.ui.pickerModalOpen
  );

  const welcomeModalOpen = useSelector(
    (state: RootState) => state.ui.welcomeModalOpen
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const isFirstTimer = window.localStorage.getItem("VISITED_BEFORE");

    if (isFirstTimer === null) {
      dispatch(showWelcomeModal());

      window.localStorage.setItem("VISITED_BEFORE", "YES");
    }
  }, []);

  return (
    <>
      <Head>
        <title>DataHarvest - LoL query builder, block editor</title>
      </Head>
      <div
        className={`relative w-full flex flex-col lg:flex-row h-full min-h-0 ${
          pickerModalOpen ? "overflow-y-hidden" : "overflow-y-auto"
        } lg:overflow-y-visible`}
      >
        <PickerPanel />
        <div className="flex 2xl:flex-row flex-col">
          <QueryCanvas />
          <OutputPanel />
        </div>
        {pickerModalOpen && <PickerModal />}
        {welcomeModalOpen && <WelcomeModal />}
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

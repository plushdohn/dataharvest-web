if (!process.env.DDRAGON_PATCH) {
  throw new Error("DDRAGON_PATCH environment variable wasn't set!");
}

type DdragonChampionsResponse = {
  data: {
    [key: string]: {
      name: string;
    };
  };
};

export async function getChampionDataForCurrentPatch(): Promise<{
  [key: string]: {
    name: string;
    imageUrl: string;
  };
}> {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/data/en_US/champion.json`
  );
  const json = (await res.json()) as DdragonChampionsResponse;

  return Object.fromEntries(
    Object.entries(json.data).map(([key, data]) => {
      return [
        key,
        {
          name: data.name,
          imageUrl: `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/img/champion/${key}.png`,
        },
      ];
    })
  );
}

type DdragonSingleRuneTree = {
  slots: {
    runes: {
      id: number;
      name: string;
      icon: string;
    }[];
  }[];
};

type DdragonRunesResponse = DdragonSingleRuneTree[];

export async function getRuneDataForCurrentPatch(): Promise<{
  [key: number]: {
    name: string;
    imageUrl: string;
  };
}> {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/data/en_US/runesReforged.json`
  );
  const json = (await res.json()) as DdragonRunesResponse;

  let iteratable: [
    number,
    {
      name: string;
      imageUrl: string;
    }
  ][] = [];

  for (const tree of json) {
    for (const slot of tree.slots) {
      for (const rune of slot.runes) {
        iteratable.push([
          rune.id,
          {
            name: rune.name,
            imageUrl: `http://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`,
          },
        ]);
      }
    }
  }

  return Object.fromEntries(iteratable);
}

export async function getListOfKeystoneIdsForCurrentPatch(): Promise<number[]> {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/data/en_US/runesReforged.json`
  );
  const json = (await res.json()) as DdragonRunesResponse;

  let iteratable: number[] = [];

  for (const tree of json) {
    const slot = tree.slots[0];

    for (const rune of slot.runes) {
      iteratable.push(rune.id);
    }
  }

  return iteratable;
}

type DdragonItemResponse = {
  data: {
    [key: number]: {
      name: string;
    };
  };
};

export async function getItemDataForCurrentPatch(): Promise<{
  [key: number]: {
    name: string;
    imageUrl: string;
  };
}> {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/data/en_US/item.json`
  );
  const json = (await res.json()) as DdragonItemResponse;

  return Object.fromEntries(
    Object.entries(json.data).map(([key, data]) => {
      return [
        key,
        {
          name: data.name,
          imageUrl: `http://ddragon.leagueoflegends.com/cdn/${process.env.DDRAGON_PATCH}.1/img/item/${key}.png`,
        },
      ];
    })
  );
}

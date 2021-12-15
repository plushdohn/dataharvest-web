export enum Platform {
  EUW = "EUW",
  EUNE = "EUNE",
  KR = "KR",
  NA = "NA",
  BR = "BR",
  JP = "JP",
  LA1 = "LA1",
  LA2 = "LA2",
  OC = "OC",
  RU = "RU",
  TR = "TR",
}

export enum RegionalEndpoint {
  Europe = "europe",
  Americas = "americas",
  Asia = "asia",
}

export type PlatformsDictionary = {
  [key in Platform]: {
    regionalEndpoint: RegionalEndpoint;
    urlValue: string;
  };
};

export enum Tier {
  IRON = "IRON",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
  DIAMOND = "DIAMOND",
  MASTER = "MASTER",
  GRANDMASTER = "GRANDMASTER",
  CHALLENGER = "CHALLENGER",
}

export enum Rank {
  I = "I",
  II = "II",
  III = "III",
  IV = "IV",
}

export const TIER_DICTIONARY: {
  [key in Tier]: number;
} = {
  IRON: 0,
  BRONZE: 4,
  SILVER: 8,
  GOLD: 12,
  PLATINUM: 16,
  DIAMOND: 20,
  MASTER: 24,
  GRANDMASTER: 28,
  CHALLENGER: 32,
};

export const RANK_DICTIONARY: {
  [key in Rank]: number;
} = {
  I: 3,
  II: 2,
  III: 1,
  IV: 0,
};

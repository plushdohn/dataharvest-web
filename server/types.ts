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

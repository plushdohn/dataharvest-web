export enum BlockKind {
  Starter,
  Filter,
  Subject,
  Group,
  Operation,
  Sort,
}

export enum OperationField {
  AverageDamageDealt = "averageDamageDealt",
  AverageDamageDealtToChampions = "averageDamageDealtToChampions",
  AverageDamageDealtToStructures = "averageDamageDealtToStructures",
  AverageHealing = "averageHealing",
  AverageCS = "averageCS",
  AverageVisionScore = "averageVisionScore",
  AverageGoldEarned = "averageGoldEarned",
  AveragePhysicalDamageDealtToChampions = "averagePhysicalDamageDealtToChampions",
  AverageMagicDamageDealtToChampions = "averageMagicDamageDealtToChampions",
  AverageDamageTaken = "averageDamageTaken",
  Wins = "wins",
  WinRate = "winRate",
  GamesCount = "gamesCount",
  CsPerMinute = "csPerMinute",
}

/*
 * --- BLOCK IDS ---
 */
export enum StarterId {
  Patch = "PATCH",
  All = "ALL",
}
export enum FilterId {
  Summoner = "SUMMONER",
  Champion = "CHAMPION",
  Region = "REGION",
  ChampionWithMythic = "CHAMPION_WITH_MYTHIC",
  Queue = "QUEUE",
  SummonerInRole = "SUMMONER_IN_ROLE",
  SummonerInTeam = "SUMMONER_IN_TEAM",
}
export enum SubjectId {
  Summoner = "SUMMONER",
  Champion = "CHAMPION",
  Role = "ROLE",
}
export enum GroupId {
  Role = "ROLE",
  Keystone = "KEYSTONE",
  Champion = "CHAMPION",
  Summoner = "SUMMONER",
  Mythic = "MYTHIC",
}
export enum OperationId {
  AverageDamageDealt = "AVERAGE_TOTAL_DAMAGE",
  AverageDamageDealtToChampions = "AVERAGE_CHAMPION_DAMAGE",
  AverageDamageDealtToStructures = "AVERAGE_STRUCTURE_DAMAGE",
  AverageHealing = "AVERAGE_HEALING",
  AverageCS = "AVERAGE_CS",
  AverageVisionScore = "AVERAGE_VISION_SCORE",
  AverageGoldEarned = "AVERAGE_GOLD_EARNED",
  AveragePhysicalDamageDealtToChampions = "AVERAGE_PHYSICAL_DAMAGE_DEALT_TO_CHAMPIONS",
  AverageMagicDamageDealtToChampions = "AVERAGE_MAGIC_DAMAGE_DEALT_TO_CHAMPIONS",
  AverageDamageTaken = "AVERAGE_DAMAGE_TAKEN",
  WinRate = "WIN_RATE",
  CsPerMinute = "CS_PER_MINUTE",
}

type SingleArg = string | number | boolean;
export type BlockArgs = SingleArg[] | SingleArg;

export interface Query {
  starter: {
    id: StarterId;
    args: any;
  };
  filters: {
    [key in FilterId]?: any;
  };
  subject?: {
    id: SubjectId;
    args: any;
  };
  group?: {
    id: GroupId;
    args: any;
  };
  operations: OperationId[];
  sort?: {
    id: OperationId;
    ascending: boolean;
  };
}

export enum ClientHints {
  Champion = "CHAMPION",
  Role = "ROLE",
  Rune = "RUNE",
  Item = "ITEM",
}

export type ServerResponse = {
  _id: number | string | null;
  hint?: ClientHints;
}[];

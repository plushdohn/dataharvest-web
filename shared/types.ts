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
  AverageGoldSpent = "averageGoldSpent",
  AveragePhysicalDamageDealtToChampions = "averagePhysicalDamageDealtToChampions",
  AverageMagicDamageDealtToChampions = "averageMagicDamageDealtToChampions",
  AverageDamageTaken = "averageDamageTaken",
  Wins = "wins",
  WinRate = "winRate",
  GamesCount = "gamesCount",
  CsPerMinute = "csPerMinute",
  AverageRuneVariablevalue = "averageRuneVariableValue",
  AverageKills = "averageKills",
  AverageDeaths = "averageDeaths",
  AverageAssists = "averageAssists",
  AverageTimeSpentPlaying = "averageTimeSpentPlaying",
  AverageWardsPlaced = "averageWardsPlaced",
  AverageWardsKilled = "averageWardsKilled",
  AverageTrueDamageDealt = "averageTrueDamageDealt",
  AverageCCTimeDealt = "averageCCTimeDealt",
  AverageTurretKills = "averageTurretKills",
  AverageBaronKills = "averageBaronKills",
  AverageDragonKills = "averageDragonKills",
}

/*
 * --- BLOCK IDS ---
 */
export enum StarterId {
  Patch = "PATCH",
  All = "ALL",
  PatchAndRegion = "PATCH_AND_REGION",
}
export enum FilterId {
  Summoner = "SUMMONER",
  Champion = "CHAMPION",
  Region = "REGION",
  ChampionWithMythic = "CHAMPION_WITH_MYTHIC",
  Queue = "QUEUE",
  SummonerInRole = "SUMMONER_IN_ROLE",
  SummonerInTeam = "SUMMONER_IN_TEAM",
  ChampionWithRune = "CHAMPION_WITH_RUNE",
  AverageRank = "AVERAGE_RANK",
}
export enum SubjectId {
  Summoner = "SUMMONER",
  Champion = "CHAMPION",
  Role = "ROLE",
  Keystone = "KEYSTONE",
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
  AverageGoldSpent = "AVERAGE_GOLD_SPENT",
  AveragePhysicalDamageDealtToChampions = "AVERAGE_PHYSICAL_DAMAGE_DEALT_TO_CHAMPIONS",
  AverageMagicDamageDealtToChampions = "AVERAGE_MAGIC_DAMAGE_DEALT_TO_CHAMPIONS",
  AverageDamageTaken = "AVERAGE_DAMAGE_TAKEN",
  WinRate = "WIN_RATE",
  CsPerMinute = "CS_PER_MINUTE",
  AverageRuneVariableValue = "AVERAGE_RUNE_VARIABLE_VALUE",
  AverageKills = "AVERAGE_KILLS",
  AverageDeaths = "AVERAGE_DEATHS",
  AverageAssists = "AVERAGE_ASSISTS",
  AverageTimeSpentPlaying = "AVERAGE_TIME_SPENT_PLAYING",
  AverageWardsPlaced = "AVERAGE_WARDS_PLACED",
  AverageWardsKilled = "AVERAGE_WARDS_KILLED",
  AverageTrueDamageDealt = "AVERAGE_TRUE_DAMAGE_DEALT",
  AverageCCTimeDealt = "AVERAGE_CC_TIME_DEALT",
  AverageTurretKills = "AVERAGE_TURRET_KILLS",
  AverageBaronKills = "AVERAGE_BARON_KILLS",
  AverageDragonKills = "AVERAGE_DRAGON_KILLS",
}
export enum SortId {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
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
  operation?: {
    id: OperationId;
    args: any;
  };
  sort?: SortId;
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

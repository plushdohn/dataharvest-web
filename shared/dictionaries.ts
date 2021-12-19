import { OperationField } from "./types";

export const VALUES_DICTIONARY_EN: {
  [key in OperationField]: string;
} = {
  [OperationField.AverageDamageDealt]: "Average damage dealt",
  [OperationField.AverageDamageDealtToChampions]: "Average damage to champions",
  [OperationField.AverageDamageDealtToStructures]:
    "Average damage to structures",
  [OperationField.AverageDamageTaken]: "Average damage taken",
  [OperationField.AverageHealing]: "Average healing",
  [OperationField.AverageVisionScore]: "Average vision score",
  [OperationField.AverageCS]: "Average creep score",
  [OperationField.AverageGoldEarned]: "Average gold earned",
  [OperationField.AverageGoldSpent]: "Average gold spent",
  [OperationField.Wins]: "Number of wins",
  [OperationField.WinRate]: "Win rate",
  [OperationField.GamesCount]: "Number of games",
  [OperationField.AveragePhysicalDamageDealtToChampions]:
    "Average physical damage to champions",
  [OperationField.AverageMagicDamageDealtToChampions]:
    "Average magic damage to champions",
  [OperationField.CsPerMinute]: "Average CS per minute",
  [OperationField.AverageRuneVariablevalue]: "Average rune variable value",
  [OperationField.AverageKills]: "Average kills",
  [OperationField.AverageDeaths]: "Average deaths",
  [OperationField.AverageAssists]: "Average assists",
  [OperationField.AverageTimeSpentPlaying]: "Average time spent playing",
  [OperationField.AverageTrueDamageDealt]: "Average true damage dealt",
  [OperationField.AverageWardsKilled]: "Average wards killed",
  [OperationField.AverageWardsPlaced]: "Average wards placed",
  [OperationField.AverageCCTimeDealt]: "Average cc time dealt",
  [OperationField.AverageTurretKills]: "Average turret kills",
  [OperationField.AverageDragonKills]: "Average dragon kills",
  [OperationField.AverageBaronKills]: "Average baron kills",
};

export const ROLES_DICTIONARY_EN = new Map([
  ["TOP", "Top"],
  ["JUNGLE", "Jungle"],
  ["MIDDLE", "Mid"],
  ["BOTTOM", "ADC"],
  ["UTILITY", "Support"],
]);

export const MYTHICS_SET = new Set([
  6632, 6691, 6692, 6656, 6662, 6671, 6630, 3152, 6673, 4005, 6672, 6653, 3190,
  6655, 6617, 4636, 6693, 4633, 2065, 6631, 3068, 3078, 6664, 4644, 3001,

  /*
  7002, 7000, 7001, 7015, 7017, 7016, 7018, 7014, 7013, 7009, 7012, 7010, 7008,
  7006, 7007, 7019, 7022, 7020, 7021, 7004, 7005, 7003, 7024, 7023,
  */
]);

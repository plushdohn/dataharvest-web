import { OperationField, OperationId } from "../../shared/types";

export default function operationsHandler(
  operations: OperationId[]
): [Object, Object?] {
  const firstStage = {};
  const secondStage = {};

  for (const id of operations) {
    const [firstBlock, secondBlock] = processSingleOperation(id);

    Object.assign(firstStage, firstBlock);

    if (secondBlock) {
      Object.assign(secondStage, secondBlock);
    }
  }

  return [firstStage, secondStage];
}

function processSingleOperation(id: OperationId): [Object, Object?] {
  switch (id) {
    case OperationId.AverageDamageDealt:
      return [
        {
          [OperationField.AverageDamageDealt]: {
            $avg: "$participants.totalDamageDealt",
          },
        },
      ];
    case OperationId.AverageDamageDealtToChampions:
      return [
        {
          [OperationField.AverageDamageDealtToChampions]: {
            $avg: "$participants.totalDamageDealtToChampions",
          },
        },
      ];
    case OperationId.AverageDamageDealtToStructures:
      return [
        {
          [OperationField.AverageDamageDealtToStructures]: {
            $avg: "$participants.damageDealtToBuildings",
          },
        },
      ];
    case OperationId.AverageHealing:
      return [
        {
          [OperationField.AverageHealing]: {
            $avg: "$participants.totalHeal",
          },
        },
      ];
    case OperationId.AverageCS:
      return [
        {
          [OperationField.AverageCS]: {
            $avg: "$participants.totalMinionsKilled",
          },
        },
      ];
    case OperationId.AverageGoldEarned:
      return [
        {
          [OperationField.AverageGoldEarned]: {
            $avg: "$participants.goldEarned",
          },
        },
      ];
    case OperationId.AverageVisionScore:
      return [
        {
          [OperationField.AverageVisionScore]: {
            $avg: "$participants.visionScore",
          },
        },
      ];
    case OperationId.AveragePhysicalDamageDealtToChampions:
      return [
        {
          [OperationField.AveragePhysicalDamageDealtToChampions]: {
            $avg: "$participants.physicalDamageDealtToChampions",
          },
        },
      ];
    case OperationId.AverageMagicDamageDealtToChampions:
      return [
        {
          [OperationField.AverageMagicDamageDealtToChampions]: {
            $avg: "$participants.magicDamageDealtToChampions",
          },
        },
      ];
    case OperationId.AverageDamageTaken:
      return [
        {
          [OperationField.AverageDamageTaken]: {
            $avg: "$participants.totalDamageTaken",
          },
        },
      ];
    case OperationId.WinRate:
      return [
        {
          [OperationField.Wins]: {
            $sum: {
              $cond: ["$participants.win", 1, 0],
            },
          },
          [OperationField.GamesCount]: {
            $sum: 1,
          },
        },
        {
          [OperationField.WinRate]: {
            $divide: [
              { $multiply: [`$${OperationField.Wins}`, 100] },
              `$${OperationField.GamesCount}`,
            ],
          },
        },
      ];
  }
}

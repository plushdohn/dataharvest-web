import { OperationField, OperationId } from "../../shared/types";

export default function operationsHandler(operations: {
  [key in OperationId]?: any;
}): [Object, Object?] {
  const firstStage = {};
  const secondStage = {};

  for (const [id, args] of Object.entries(operations)) {
    const [firstBlock, secondBlock] = processSingleOperation(
      id as OperationId,
      args
    );

    Object.assign(firstStage, firstBlock);

    if (secondBlock) {
      Object.assign(secondStage, secondBlock);
    }
  }

  return [firstStage, secondStage];
}

function processSingleOperation(id: OperationId, args: any): [Object, Object?] {
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
            $avg: {
              $sum: [
                "$participants.totalMinionsKilled",
                "$participants.neutralMinionsKilled",
              ],
            },
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
    case OperationId.CsPerMinute:
      return [
        {
          [OperationField.CsPerMinute]: {
            $avg: {
              $divide: [
                {
                  $sum: [
                    "$participants.totalMinionsKilled",
                    "$participants.neutralMinionsKilled",
                  ],
                },
                {
                  $divide: [
                    {
                      $divide: [
                        {
                          $subtract: [
                            "$gameEndTimestamp",
                            "$gameStartTimestamp",
                          ],
                        },
                        1000,
                      ],
                    },
                    60,
                  ],
                },
              ],
            },
          },
        },
      ];
    case OperationId.AverageRuneVariableValue:
      return [
        {
          [OperationField.AverageRuneVariablevalue]: {
            $avg: `$participants.runes.${args[0]}.${args[1]}`,
          },
        },
      ];
    case OperationId.AverageKills:
      return [
        {
          [OperationField.AverageKills]: {
            $avg: "$participants.kills",
          },
        },
      ];
    case OperationId.AverageDeaths:
      return [
        {
          [OperationField.AverageDeaths]: {
            $avg: "$participants.deaths",
          },
        },
      ];
    case OperationId.AverageAssists:
      return [
        {
          [OperationField.AverageAssists]: {
            $avg: "$participants.assists",
          },
        },
      ];
    case OperationId.AverageTimeSpentPlaying:
      return [
        {
          [OperationField.AverageTimeSpentPlaying]: {
            $avg: "$participants.timePlayed",
          },
        },
      ];
    case OperationId.AverageWardsPlaced:
      return [
        {
          [OperationField.AverageWardsPlaced]: {
            $avg: "$participants.wardsPlaced",
          },
        },
      ];
    case OperationId.AverageWardsKilled:
      return [
        {
          [OperationField.AverageWardsKilled]: {
            $avg: "$participants.wardsKilled",
          },
        },
      ];
    case OperationId.AverageTrueDamageDealt:
      return [
        {
          [OperationField.AverageTrueDamageDealt]: {
            $avg: "$participants.trueDamageDealt",
          },
        },
      ];
    case OperationId.AverageCCTimeDealt:
      return [
        {
          [OperationField.AverageCCTimeDealt]: {
            $avg: "$participants.timeCCingOthers",
          },
        },
      ];
    case OperationId.AverageTurretKills:
      return [
        {
          [OperationField.AverageTurretKills]: {
            $avg: "$participants.turretKills",
          },
        },
      ];
    case OperationId.AverageBaronKills:
      return [
        {
          [OperationField.AverageBaronKills]: {
            $avg: "$participants.baronKills",
          },
        },
      ];
    case OperationId.AverageDragonKills:
      return [
        {
          [OperationField.AverageDragonKills]: {
            $avg: "$participants.dragonKills",
          },
        },
      ];
    case OperationId.AverageGoldSpent:
      return [
        {
          [OperationField.AverageGoldSpent]: {
            $avg: "$participants.goldSpent",
          },
        },
      ];
  }
}

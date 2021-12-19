import { OperationField, OperationId } from "../../shared/types";

export default function sortHandler(id: OperationId, args: any): Object {
  switch (id) {
    case OperationId.AverageDamageDealt:
      return {
        [OperationField.AverageDamageDealt]: args ? 1 : -1,
      };
    case OperationId.AverageDamageDealtToChampions:
      return {
        [OperationField.AverageDamageDealtToChampions]: args ? 1 : -1,
      };
    case OperationId.AverageDamageDealtToStructures:
      return {
        [OperationField.AverageDamageDealtToStructures]: args ? 1 : -1,
      };
    case OperationId.AverageHealing:
      return {
        [OperationField.AverageHealing]: args ? 1 : -1,
      };
    case OperationId.AverageCS:
      return {
        [OperationField.AverageCS]: args ? 1 : -1,
      };
    case OperationId.AverageGoldEarned:
      return {
        [OperationField.AverageGoldEarned]: args ? 1 : -1,
      };
    case OperationId.AverageVisionScore:
      return {
        [OperationField.AverageVisionScore]: args ? 1 : -1,
      };
    case OperationId.AveragePhysicalDamageDealtToChampions:
      return {
        [OperationField.AveragePhysicalDamageDealtToChampions]: args ? 1 : -1,
      };
    case OperationId.AverageMagicDamageDealtToChampions:
      return {
        [OperationField.AverageMagicDamageDealtToChampions]: args ? 1 : -1,
      };
    case OperationId.AverageDamageTaken:
      return {
        [OperationField.AverageDamageTaken]: args ? 1 : -1,
      };
    case OperationId.WinRate:
      return {
        [OperationField.WinRate]: args ? 1 : -1,
      };
    case OperationId.CsPerMinute:
      return {
        [OperationField.CsPerMinute]: args ? 1 : -1,
      };
  }
}

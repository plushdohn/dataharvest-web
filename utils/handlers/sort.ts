import { OperationField, OperationId } from "../../shared/types";

export default function sortHandler(id: OperationId, asc: boolean): Object {
  switch (id) {
    case OperationId.AverageDamageDealt:
      return {
        [OperationField.AverageDamageDealt]: asc ? 1 : -1,
      };
    case OperationId.AverageDamageDealtToChampions:
      return {
        [OperationField.AverageDamageDealtToChampions]: asc ? 1 : -1,
      };
    case OperationId.AverageDamageDealtToStructures:
      return {
        [OperationField.AverageDamageDealtToStructures]: asc ? 1 : -1,
      };
    case OperationId.AverageHealing:
      return {
        [OperationField.AverageHealing]: asc ? 1 : -1,
      };
    case OperationId.AverageCS:
      return {
        [OperationField.AverageCS]: asc ? 1 : -1,
      };
    case OperationId.AverageGoldEarned:
      return {
        [OperationField.AverageGoldEarned]: asc ? 1 : -1,
      };
    case OperationId.AverageVisionScore:
      return {
        [OperationField.AverageVisionScore]: asc ? 1 : -1,
      };
    case OperationId.AveragePhysicalDamageDealtToChampions:
      return {
        [OperationField.AveragePhysicalDamageDealtToChampions]: asc ? 1 : -1,
      };
    case OperationId.AverageMagicDamageDealtToChampions:
      return {
        [OperationField.AverageMagicDamageDealtToChampions]: asc ? 1 : -1,
      };
    case OperationId.AverageDamageTaken:
      return {
        [OperationField.AverageDamageTaken]: asc ? 1 : -1,
      };
    case OperationId.WinRate:
      return {
        [OperationField.WinRate]: asc ? 1 : -1,
      };
  }
}

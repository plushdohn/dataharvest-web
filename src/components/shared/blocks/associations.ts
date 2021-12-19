import {
  FilterId,
  GroupId,
  OperationId,
  StarterId,
  SubjectId,
} from "shared/types";
import ChampionFilter from "./filters/ChampionFilter";
import ChampionWithMythicFilter from "./filters/ChampionWithMythicFilter";
import ChampionWithRuneFilter from "./filters/ChampionWithRuneFilter";
import QueueFilter from "./filters/QueueFilter";
import RegionFilter from "./filters/RegionFilter";
import SummonerFilter from "./filters/SummonerFilter";
import SummonerInRoleFilter from "./filters/SummonerInRole";
import SummonerInTeamFilter from "./filters/SummonerInTeamFilter";
import ChampionGroup from "./groups/ChampionGroup";
import KeystoneGroup from "./groups/KeystoneGroup";
import MythicGroup from "./groups/MythicGroup";
import RoleGroup from "./groups/RoleGroupBlock";
import SummonerGroup from "./groups/SummonerGroup";
import AverageAssistsOp from "./operations/AverageAssistsOp";
import AverageBaronKillsOp from "./operations/AverageBaronKillsOp";
import AverageCCTimeDealtOp from "./operations/AverageCCTimeDealtOp";
import AverageCSOp from "./operations/AverageCSOp";
import AverageCsPerMinuteOp from "./operations/AverageCsPerMinuteOp";
import AverageDamageDealtOp from "./operations/AverageDamageDealtOp";
import AverageDamageDealtToChampionssOp from "./operations/AverageDamageDealtToChampionsOp";
import AverageDamageDealtToStructuresOp from "./operations/AverageDamageDealtToStructuresOp";
import AverageDamageTakenOp from "./operations/AverageDamageTakenOp";
import AverageDeathsOp from "./operations/AverageDeathsOp";
import AverageDragonKillsOp from "./operations/AverageDragonKillsOp";
import AverageGoldEarnedOp from "./operations/AverageGoldEarnedOp";
import AverageGoldSpentOp from "./operations/AverageGoldSpentOp";
import AverageHealingOp from "./operations/AverageHealingOp";
import AverageKillsOp from "./operations/AverageKillsOp";
import AverageMagicDamageToChampionsOp from "./operations/AverageMagicDamageToChampionsOp";
import AveragePhysicalDamageToChampionsOp from "./operations/AveragePhysicalDamageToChampionsOp";
import AverageRuneVariableValueOp from "./operations/AverageRuneVariableValueOp";
import AverageTimeSpentPlayingOp from "./operations/AverageTimeSpentPlayingOp";
import AverageTrueDamageDealtOp from "./operations/AverageTrueDamageDealtOp";
import AverageTurretKillsOp from "./operations/AverageTurretKillsOp";
import AverageVisionScoreOp from "./operations/AverageVisionScoreOp";
import AverageWardsKilledOp from "./operations/AverageWardsKilledOp";
import AverageWardsPlacedOp from "./operations/AverageWardsPlacedOp";
import WinRateOp from "./operations/WinRateOp";
import AverageAssistsSort from "./sorts/AverageAssistsSort";
import AverageBaronKillsSort from "./sorts/AverageBaronKillsSort";
import AverageCCTimeDealtSort from "./sorts/AverageCCTimeDealtSort";
import AverageCsPerMinuteSort from "./sorts/AverageCsPerMinuteSort";
import AverageCSSort from "./sorts/AverageCSSort";
import AverageDamageDealtSort from "./sorts/AverageDamageDealtSort";
import AverageDamageDealtToChampionsSort from "./sorts/AverageDamageDealtToChampionsSort";
import AverageDamageDealtToStructuresSort from "./sorts/AverageDamageDealtToStructuresSort";
import AverageDamageTakenSort from "./sorts/AverageDamageTakenSort";
import AverageDeathsSort from "./sorts/AverageDeathsSort";
import AverageDragonKillsSort from "./sorts/AverageDragonKillsSort";
import AverageGoldEarnedSort from "./sorts/AverageGoldEarnedSort";
import AverageGoldSpentSort from "./sorts/AverageGoldSpentSort";
import AverageHealingSort from "./sorts/AverageHealingSort";
import AverageKillsSort from "./sorts/AverageKillsSort";
import AverageMagicDamageToChampionsSort from "./sorts/AverageMagicDamageToChampionsSort";
import AveragePhysicalDamageToChampionsSort from "./sorts/AveragePhysicalDamageToChampionsSort";
import AverageRunVariableValueSort from "./sorts/AverageRuneVariableValueSort";
import AverageTimeSpentPlayingSort from "./sorts/AverageTimeSpentPlayingSort";
import AverageTrueDamageDealtSort from "./sorts/AverageTrueDamageDealtSort";
import AverageTurretKillsSort from "./sorts/AverageTurretKillsSort";
import AverageVisionScoreSort from "./sorts/AverageVisionScoreSort";
import AverageWardsKilledSort from "./sorts/AverageWardsKilledSort";
import AverageWardsPlacedSort from "./sorts/AverageWardsPlacedSort";
import WinRateSort from "./sorts/WinRateSort";
import AllStarter from "./starters/AllStarter";
import PatchStarter from "./starters/PatchStarter";
import ChampionSubject from "./subjects/ChampionSubject";
import RoleSubject from "./subjects/RoleSubject";
import SummonerSubject from "./subjects/SummonerSubject";

type BlockTemplate<Type> = (p: {
  args: Type;
  setArgs: (n: Type) => any;
}) => JSX.Element;

type Association<T1 extends string> = {
  [key in T1]: {
    component: BlockTemplate<any>;
    initialState?: any;
  };
};

export const ASSOCIATIONS: {
  starters: Association<StarterId>;
  filters: Association<FilterId>;
  subjects: Association<SubjectId>;
  groups: Association<GroupId>;
  operations: Association<OperationId>;
  sorts: Association<OperationId>;
} = {
  starters: {
    [StarterId.All]: {
      component: AllStarter,
    },
    [StarterId.Patch]: {
      component: PatchStarter,
      initialState: "11.24",
    },
  },
  filters: {
    [FilterId.Summoner]: {
      component: SummonerFilter,
      initialState: "hide on bush",
    },
    [FilterId.Champion]: {
      component: ChampionFilter,
      initialState: "Aatrox",
    },
    [FilterId.Region]: {
      component: RegionFilter,
      initialState: "EUW1",
    },
    [FilterId.Queue]: {
      component: QueueFilter,
      initialState: 420,
    },
    [FilterId.ChampionWithMythic]: {
      component: ChampionWithMythicFilter,
      initialState: ["Aatrox", "Everfrost"],
    },
    [FilterId.SummonerInRole]: {
      component: SummonerInRoleFilter,
      initialState: ["Babus", "TOP"],
    },
    [FilterId.SummonerInTeam]: {
      component: SummonerInTeamFilter,
      initialState: ["Re Brizz", 100],
    },
    [FilterId.ChampionWithRune]: {
      component: ChampionWithRuneFilter,
      initialState: ["Zed", 8009],
    },
  },
  subjects: {
    [SubjectId.Champion]: {
      component: ChampionSubject,
      initialState: "Pyke",
    },
    [SubjectId.Role]: {
      component: RoleSubject,
      initialState: "TOP",
    },
    [SubjectId.Summoner]: {
      component: SummonerSubject,
      initialState: "hide on bush",
    },
  },
  groups: {
    [GroupId.Champion]: {
      component: ChampionGroup,
    },
    [GroupId.Keystone]: {
      component: KeystoneGroup,
    },
    [GroupId.Mythic]: {
      component: MythicGroup,
    },
    [GroupId.Role]: {
      component: RoleGroup,
    },
    [GroupId.Summoner]: {
      component: SummonerGroup,
    },
  },
  operations: {
    [OperationId.AverageCS]: {
      component: AverageCSOp,
    },
    [OperationId.AverageDamageDealt]: {
      component: AverageDamageDealtOp,
    },
    [OperationId.AverageDamageDealtToChampions]: {
      component: AverageDamageDealtToChampionssOp,
    },
    [OperationId.AverageDamageDealtToStructures]: {
      component: AverageDamageDealtToStructuresOp,
    },
    [OperationId.AverageDamageTaken]: { component: AverageDamageTakenOp },
    [OperationId.AverageGoldEarned]: { component: AverageGoldEarnedOp },
    [OperationId.AverageGoldSpent]: { component: AverageGoldSpentOp },
    [OperationId.AverageHealing]: { component: AverageHealingOp },
    [OperationId.AverageMagicDamageDealtToChampions]: {
      component: AverageMagicDamageToChampionsOp,
    },
    [OperationId.AveragePhysicalDamageDealtToChampions]: {
      component: AveragePhysicalDamageToChampionsOp,
    },
    [OperationId.AverageVisionScore]: { component: AverageVisionScoreOp },
    [OperationId.WinRate]: { component: WinRateOp },
    [OperationId.CsPerMinute]: { component: AverageCsPerMinuteOp },
    [OperationId.AverageRuneVariableValue]: {
      component: AverageRuneVariableValueOp,
      initialState: ["primary.keystone", "var1"],
    },
    [OperationId.AverageKills]: {
      component: AverageKillsOp,
    },
    [OperationId.AverageDeaths]: {
      component: AverageDeathsOp,
    },
    [OperationId.AverageAssists]: {
      component: AverageAssistsOp,
    },
    [OperationId.AverageTimeSpentPlaying]: {
      component: AverageTimeSpentPlayingOp,
    },
    [OperationId.AverageWardsPlaced]: {
      component: AverageWardsPlacedOp,
    },
    [OperationId.AverageWardsKilled]: {
      component: AverageWardsKilledOp,
    },
    [OperationId.AverageTrueDamageDealt]: {
      component: AverageTrueDamageDealtOp,
    },
    [OperationId.AverageCCTimeDealt]: {
      component: AverageCCTimeDealtOp,
    },
    [OperationId.AverageTurretKills]: {
      component: AverageTurretKillsOp,
    },
    [OperationId.AverageBaronKills]: {
      component: AverageBaronKillsOp,
    },
    [OperationId.AverageDragonKills]: {
      component: AverageDragonKillsOp,
    },
  },
  sorts: {
    [OperationId.AverageCS]: {
      component: AverageCSSort,
    },
    [OperationId.AverageDamageDealt]: {
      component: AverageDamageDealtSort,
    },
    [OperationId.AverageDamageDealtToChampions]: {
      component: AverageDamageDealtToChampionsSort,
    },
    [OperationId.AverageDamageDealtToStructures]: {
      component: AverageDamageDealtToStructuresSort,
    },
    [OperationId.AverageDamageTaken]: { component: AverageDamageTakenSort },
    [OperationId.AverageGoldEarned]: { component: AverageGoldEarnedSort },
    [OperationId.AverageGoldSpent]: { component: AverageGoldSpentSort },
    [OperationId.AverageHealing]: { component: AverageHealingSort },
    [OperationId.AverageMagicDamageDealtToChampions]: {
      component: AverageMagicDamageToChampionsSort,
    },
    [OperationId.AveragePhysicalDamageDealtToChampions]: {
      component: AveragePhysicalDamageToChampionsSort,
    },
    [OperationId.AverageVisionScore]: { component: AverageVisionScoreSort },
    [OperationId.WinRate]: { component: WinRateSort },
    [OperationId.CsPerMinute]: { component: AverageCsPerMinuteSort },
    [OperationId.AverageRuneVariableValue]: {
      component: AverageRunVariableValueSort,
    },
    [OperationId.AverageKills]: {
      component: AverageKillsSort,
    },
    [OperationId.AverageDeaths]: {
      component: AverageDeathsSort,
    },
    [OperationId.AverageAssists]: {
      component: AverageAssistsSort,
    },
    [OperationId.AverageTimeSpentPlaying]: {
      component: AverageTimeSpentPlayingSort,
    },
    [OperationId.AverageWardsPlaced]: {
      component: AverageWardsPlacedSort,
    },
    [OperationId.AverageWardsKilled]: {
      component: AverageWardsKilledSort,
    },
    [OperationId.AverageTrueDamageDealt]: {
      component: AverageTrueDamageDealtSort,
    },
    [OperationId.AverageCCTimeDealt]: {
      component: AverageCCTimeDealtSort,
    },
    [OperationId.AverageTurretKills]: {
      component: AverageTurretKillsSort,
    },
    [OperationId.AverageBaronKills]: {
      component: AverageBaronKillsSort,
    },
    [OperationId.AverageDragonKills]: {
      component: AverageDragonKillsSort,
    },
  },
};

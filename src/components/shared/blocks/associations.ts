import {
  FilterId,
  GroupId,
  OperationId,
  StarterId,
  SubjectId,
} from "shared/types";
import ChampionFilter from "./filters/ChampionFilter";
import ChampionWithMythicFilter from "./filters/ChampionWithMythicFilter";
import QueueFilter from "./filters/QueueFilter";
import RegionFilter from "./filters/RegionFilterBlock";
import SummonerFilter from "./filters/SummonerFilterBlock";
import SummonerInRoleFilter from "./filters/SummonerInRole";
import ChampionGroup from "./groups/ChampionGroup";
import KeystoneGroup from "./groups/KeystoneGroup";
import MythicGroup from "./groups/MythicGroup";
import RoleGroup from "./groups/RoleGroupBlock";
import SummonerGroup from "./groups/SummonerGroup";
import AverageCSOp from "./operations/AverageCSOp";
import AverageDamageDealtOp from "./operations/AverageDamageDealtOp";
import AverageDamageDealtToChampionssOp from "./operations/AverageDamageDealtToChampionsOp";
import AverageDamageDealtToStructuresOp from "./operations/AverageDamageDealtToStructuresOp";
import AverageDamageTakenOp from "./operations/AverageDamageTakenOp";
import AverageGoldEarnedOp from "./operations/AverageGoldEarnedOp";
import AverageHealingOp from "./operations/AverageHealingOp";
import AverageMagicDamageToChampionsOp from "./operations/AverageMagicDamageToChampionsOp";
import AveragePhysicalDamageToChampionsOp from "./operations/AveragePhysicalDamageToChampionsOp";
import AverageVisionScoreOp from "./operations/AverageVisionScoreOp";
import WinRateOp from "./operations/WinRateOp";
import AverageCSSort from "./sorts/AverageCSSort";
import AverageDamageDealtSort from "./sorts/AverageDamageDealtSort";
import AverageDamageDealtToChampionsSort from "./sorts/AverageDamageDealtToChampionsSort";
import AverageDamageDealtToStructuresSort from "./sorts/AverageDamageDealtToStructuresSort";
import AverageDamageTakenSort from "./sorts/AverageDamageTakenSort";
import AverageGoldEarnedSort from "./sorts/AverageGoldEarnedSort";
import AverageHealingSort from "./sorts/AverageHealingSort";
import AverageMagicDamageToChampionsSort from "./sorts/AverageMagicDamageToChampionsSort";
import AveragePhysicalDamageToChampionsSort from "./sorts/AveragePhysicalDamageToChampionsSort";
import AverageVisionScoreSort from "./sorts/AverageVisionScoreSort";
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
  [key in T1]: Entry<any>;
};

type Entry<Type> = {
  component: BlockTemplate<Type>;
  initialState: Type;
};

type OperationAssociation<Type extends string> = {
  [key in Type]: OperationEntry;
};

type OperationEntry = () => JSX.Element;

export const ASSOCIATIONS: {
  starters: Association<StarterId>;
  filters: Association<FilterId>;
  subjects: Association<SubjectId>;
  groups: Association<GroupId>;
  operations: OperationAssociation<OperationId>;
  sorts: {
    [key in OperationId]: {
      component: (props: {
        asc: boolean;
        setAsc: (n: boolean) => void;
      }) => JSX.Element;
      initialState: boolean;
    };
  };
} = {
  starters: {
    [StarterId.All]: {
      component: AllStarter,
      initialState: null,
    },
    [StarterId.Patch]: {
      component: PatchStarter,
      initialState: "11.23",
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
  },
  subjects: {
    [SubjectId.Champion]: {
      component: ChampionSubject,
      initialState: "Aatrox",
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
      initialState: null,
    },
    [GroupId.Keystone]: {
      component: KeystoneGroup,
      initialState: null,
    },
    [GroupId.Mythic]: {
      component: MythicGroup,
      initialState: null,
    },
    [GroupId.Role]: {
      component: RoleGroup,
      initialState: null,
    },
    [GroupId.Summoner]: {
      component: SummonerGroup,
      initialState: null,
    },
  },
  operations: {
    [OperationId.AverageCS]: AverageCSOp,
    [OperationId.AverageDamageDealt]: AverageDamageDealtOp,
    [OperationId.AverageDamageDealtToChampions]:
      AverageDamageDealtToChampionssOp,
    [OperationId.AverageDamageDealtToStructures]:
      AverageDamageDealtToStructuresOp,
    [OperationId.AverageDamageTaken]: AverageDamageTakenOp,
    [OperationId.AverageGoldEarned]: AverageGoldEarnedOp,
    [OperationId.AverageHealing]: AverageHealingOp,
    [OperationId.AverageMagicDamageDealtToChampions]:
      AverageMagicDamageToChampionsOp,
    [OperationId.AveragePhysicalDamageDealtToChampions]:
      AveragePhysicalDamageToChampionsOp,
    [OperationId.AverageVisionScore]: AverageVisionScoreOp,
    [OperationId.WinRate]: WinRateOp,
  },
  sorts: {
    [OperationId.AverageCS]: {
      component: AverageCSSort,
      initialState: false,
    },
    [OperationId.AverageDamageDealt]: {
      component: AverageDamageDealtSort,
      initialState: false,
    },
    [OperationId.AverageDamageDealtToChampions]: {
      component: AverageDamageDealtToChampionsSort,
      initialState: false,
    },
    [OperationId.AverageDamageDealtToStructures]: {
      component: AverageDamageDealtToStructuresSort,
      initialState: false,
    },
    [OperationId.AverageDamageTaken]: {
      component: AverageDamageTakenSort,
      initialState: false,
    },
    [OperationId.AverageGoldEarned]: {
      component: AverageGoldEarnedSort,
      initialState: false,
    },
    [OperationId.AverageHealing]: {
      component: AverageHealingSort,
      initialState: false,
    },
    [OperationId.AverageMagicDamageDealtToChampions]: {
      component: AverageMagicDamageToChampionsSort,
      initialState: false,
    },
    [OperationId.AveragePhysicalDamageDealtToChampions]: {
      component: AveragePhysicalDamageToChampionsSort,
      initialState: false,
    },
    [OperationId.AverageVisionScore]: {
      component: AverageVisionScoreSort,
      initialState: false,
    },
    [OperationId.WinRate]: {
      component: WinRateSort,
      initialState: false,
    },
  },
};

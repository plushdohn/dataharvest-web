import { SubjectId } from "../../shared/types";

export default function subjectHandler(id: SubjectId, args: any): Object {
  switch (id) {
    case SubjectId.Summoner:
      return {
        "participants.summonerName": args,
      };
    case SubjectId.Champion:
      return {
        "participants.championName": args,
      };
    case SubjectId.Role:
      return {
        "participants.teamPosition": args,
      };
  }
}

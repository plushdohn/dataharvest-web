import { ClientHints, GroupId } from "../../shared/types";

export default function groupHandler(
  id: GroupId
): [Object, ClientHints | null] {
  switch (id) {
    case GroupId.Role:
      return [
        {
          _id: "$participants.teamPosition",
        },
        ClientHints.Role,
      ];
    case GroupId.Keystone:
      return [
        {
          _id: "$participants.runes.primary.keystone.id",
        },
        ClientHints.Rune,
      ];
    case GroupId.Champion:
      return [
        {
          _id: "$participants.championName",
        },
        ClientHints.Champion,
      ];
    case GroupId.Summoner:
      return [
        {
          _id: "$participants.summonerName",
        },
        null,
      ];
    case GroupId.Mythic:
      return [
        {
          _id: "$participants.mythic",
        },
        ClientHints.Item,
      ];
  }
}

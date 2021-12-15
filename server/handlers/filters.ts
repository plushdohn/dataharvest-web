import { FilterId } from "../../shared/types";

/**
 * From a Filters object, returns an object
 * that should be given to a MongoDB $match block.
 *
 * @param {Filters} filters
 * @returns {any}
 */
export default function filterHandler(filters: {
  [key in FilterId]?: any;
}): any {
  const out = {};

  for (const [filterId, args] of Object.entries(filters)) {
    Object.assign(out, processFilter(filterId as FilterId, args));
  }

  return out;
}

function processFilter(id: FilterId, args: any): Object {
  switch (id) {
    case FilterId.Summoner:
      return {
        "participants.summonerName": args,
      };
    case FilterId.Champion:
      return {
        "participants.championName": args,
      };
    case FilterId.Region:
      return {
        platformId: args,
      };
    case FilterId.Queue:
      return {
        queueId: args,
      };
    case FilterId.ChampionWithMythic:
      return {
        participants: {
          $elemMatch: {
            championName: args[0],
            mythic: args[1],
          },
        },
      };
    case FilterId.SummonerInRole:
      return {
        participants: {
          $elemMatch: {
            summonerName: args[0],
            teamPosition: args[1],
          },
        },
      };
    case FilterId.SummonerInTeam:
      return {
        participants: {
          $elemMatch: {
            summonerName: args[0],
            teamId: args[1],
          },
        },
      };
    case FilterId.ChampionWithRune:
      return {
        participants: {
          $elemMatch: {
            championName: args[0],
            $or: [
              {
                "runes.primary.keystone.id": args[1],
              },
              {
                "runes.primary.rune1.id": args[1],
              },
              {
                "runes.primary.rune2.id": args[1],
              },
              {
                "runes.primary.rune3.id": args[1],
              },
              {
                "runes.secondary.rune1.id": args[1],
              },
              {
                "runes.secondary.rune2.id": args[1],
              },
            ],
          },
        },
      };
  }
}

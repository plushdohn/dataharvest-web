import { FilterId } from "../../shared/types";

/**
 * From a Filters object, returns an object
 * that should be given to a MongoDB $match block.
 *
 * Throws an error in case an unsupported filter was given.
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
  }
}

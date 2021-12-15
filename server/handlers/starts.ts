import { StarterId } from "shared/types";

export default function starterHandler(id: StarterId, args: any): Object {
  switch (id) {
    case StarterId.Patch:
      return {
        patch: args,
      };
    case StarterId.All:
      return {};
  }
}

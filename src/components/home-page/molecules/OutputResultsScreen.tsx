import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import { ClientHints, OperationField } from "shared/types";
import omit from "lodash/omit";
import { ROLES_DICTIONARY_EN } from "shared/dictionaries";
import OutputSingleResult from "../atoms/OutputSingleResult";

function useNormalizedQueryResponse(): {
  name: string;
  imageUrl?: string;
  values: any;
}[] {
  const data = useSelector((state: RootState) => state.queryApi.data);
  const ddragon = useSelector((state: RootState) => state.dataDragon);

  if (data === undefined) {
    throw new Error(
      "Fatal error: Tried to render output with no results to show."
    );
  }

  return data.map((group) => {
    const values = omit(omit(group, "hint"), "_id");

    if (!group.hint) {
      return {
        name: "Result",
        values,
      };
    }

    const id = group._id as string | number;

    switch (group.hint) {
      case ClientHints.Champion:
        return {
          ...ddragon.champions[id],
          values,
        };
      case ClientHints.Item:
        return {
          ...ddragon.items[id as number],
          values,
        };
      case ClientHints.Rune:
        return {
          ...ddragon.runes[id as number],
          values,
        };
      case ClientHints.Role:
        return {
          name: ROLES_DICTIONARY_EN.get(id as string) as string,
          values,
        };
    }
  });
}

export default function OutputResultsScreen() {
  const data = useNormalizedQueryResponse();

  return (
    <>
      {data.map((group) => (
        <OutputSingleResult key={group.name} {...group} />
      ))}
    </>
  );
}

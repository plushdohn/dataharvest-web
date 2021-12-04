import { useMemo } from "react";
import { FilterId } from "shared/types";
import { FilterBlock } from "../../shared/blocks/filters/GenericFilter";

export default function QueryCanvasFilters(props: {
  filters: {
    [key in FilterId]?: any;
  };
}) {
  const keys = useMemo(
    () => Object.keys(props.filters) as FilterId[],
    [props.filters]
  );

  return (
    <>
      {keys.map((key) => (
        <FilterBlock id={key} />
      ))}
    </>
  );
}

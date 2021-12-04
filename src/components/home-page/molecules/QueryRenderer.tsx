import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import QueryCanvasFilters from "../atoms/QueryCanvasFilters";
import QueryCanvasGroup from "../atoms/QueryCanvasGroup";
import QueryCanvasOperations from "../atoms/QueryCanvasOperations";
import QueryCanvasSort from "../atoms/QueryCanvasSort";
import QueryCanvasStarter from "../atoms/QueryCanvasStarter";
import QueryCanvasSubject from "../atoms/QueryCanvasSubject";

export default function QueryRenderer() {
  const query = useSelector((state: RootState) => state.query);

  return (
    <div>
      <QueryCanvasStarter starterId={query.starter.id} />
      <QueryCanvasFilters filters={query.filters} />
      {query.subject && <QueryCanvasSubject subjectId={query.subject.id} />}
      {query.group && <QueryCanvasGroup groupId={query.group.id} />}
      <QueryCanvasOperations operations={query.operations} />
      {query.sort && <QueryCanvasSort operationId={query.sort.id} />}
    </div>
  );
}

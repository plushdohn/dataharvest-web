import { RootState } from "@/src/store";
import { useSelector } from "react-redux";
import QueryCanvasAddBlocksButton from "../atoms/QueryCanvasAddBlocksButton";
import QueryCanvasFilters from "../atoms/QueryCanvasFilters";
import QueryCanvasGroup from "../atoms/QueryCanvasGroup";
import QueryCanvasOperations from "../atoms/QueryCanvasOperation";
import QueryCanvasSort from "../atoms/QueryCanvasSort";
import QueryCanvasStarter from "../atoms/QueryCanvasStarter";
import QueryCanvasSubject from "../atoms/QueryCanvasSubject";

export default function QueryRenderer() {
  const query = useSelector((state: RootState) => state.query);

  return (
    <div className="inline-flex flex-col items-start">
      <QueryCanvasStarter starterId={query.starter.id} />
      <QueryCanvasFilters filters={query.filters} />
      {query.subject && <QueryCanvasSubject subjectId={query.subject.id} />}
      {query.group && <QueryCanvasGroup groupId={query.group.id} />}
      {query.operation && <QueryCanvasOperations operation={query.operation} />}
      {query.sort && <QueryCanvasSort sortId={query.sort} />}
      <QueryCanvasAddBlocksButton />
    </div>
  );
}

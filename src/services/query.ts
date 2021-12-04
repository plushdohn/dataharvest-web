import { Query, ServerResponse } from "shared/types";
import axios from "axios";

export function runQuery(query: Query, captcha: string) {
  return axios.post("/api/exec", {
    query,
    captcha,
  });
}

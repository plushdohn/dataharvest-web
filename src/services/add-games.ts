import axios from "axios";

export function addSummonersGamesToDatabase(
  region: string,
  summonerName: string,
  captcha: string
) {
  return axios
    .put(`/api/refresh/${region}/${summonerName}?captcha=${captcha}`)
    .then((res) => res.data);
}

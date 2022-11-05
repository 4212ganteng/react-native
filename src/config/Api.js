import axios from "axios";

export const API = axios.create({
  baseURL: `https://api.kontenbase.com/query/api/v1/8267e433-c809-421b-a72b-cf45e3a884eb`,
});

export function setAutorize(token) {
  if (!token) {
    delete API.defaults.headers.common;
    return;
  }

  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

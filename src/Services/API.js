import { API_KEY, BASE_URL } from "../config";

export const getPopularMovieService = async (url) =>
  Promise.race([
    (async () => {
      const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}&page=${1}`;
      const response = await fetch(API_URL, { method: "GET" });
      return response.json();
    })(),
  ]);

import axios from "axios";

const API_KEY = "5dae93d2ae7df9c19229abba9896c94a";
const API_BASE_URL = "http://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });

    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Couldn't get the data");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
// 5dae93d2ae7df9c19229abba9896c94a

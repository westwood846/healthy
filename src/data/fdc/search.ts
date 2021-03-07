import useSWR from "swr";
import { FDAErrorResponse, SearchResult } from "./types";

const API_KEY = "EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP";

const getKey = (query: string) => {
  if (!query || query.trim().length === 0) return null;
  return `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${encodeURIComponent(
    query.trim()
  )}`;
};

export const useSearch = (query: string) => {
  const { data, error } = useSWR<SearchResult, FDAErrorResponse>(getKey(query));
  return { data, error };
};

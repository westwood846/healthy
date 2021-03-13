// https://fdc.nal.usda.gov/api-spec/fdc_api.html

import useSWR from "swr";
import { DataType, FDAErrorResponse, SearchResult } from "./types";

const API_KEY = "EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP";

const getKey = (query?: string, dataTypes?: DataType[]) => {
  if (!query || query.trim().length === 0) return null;
  if (!dataTypes || dataTypes.length === 0) return null;
  return `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${encodeURIComponent(
    query.trim()
  )}&dataType=${encodeURIComponent(dataTypes.join(","))}`;
};

export const useSearch = (query?: string, dataTypes?: DataType[]) => {
  const { data, error } = useSWR<SearchResult, FDAErrorResponse>(
    getKey(query, dataTypes)
  );
  return { data, error };
};

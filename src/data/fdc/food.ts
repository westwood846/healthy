import { partial } from "lodash";
import { useContext } from "react";
import useSWR from "swr";
import { multiFetcher } from "../../config/swr";
import { FdcApiContext } from "../../contexts/fdcApiKey";
import { foodResultToHealthyFood } from "../models";
import { FDAErrorResponse, FoodResult } from "./types";

const getKey = (API_KEY?: string, id?: number) => {
  if (!API_KEY) return null;
  if (!id) return null;
  return `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${API_KEY}`;
};

export const useFood = (id?: number) => {
  const { key: API_KEY } = useContext(FdcApiContext);
  const key = getKey(API_KEY, id);
  const { data, error } = useSWR<FoodResult | FDAErrorResponse>(key);
  const food = data
    ? (data as FoodResult).fdcId
      ? foodResultToHealthyFood(data as FoodResult)
      : undefined
    : undefined;
  const apiError = data ? (data as FDAErrorResponse).error : undefined;
  const isLoading = key && !error && !data;
  return { food, data, apiError, error, isLoading };
};

export const useFoods = (ids: number[]) => {
  const { key: API_KEY } = useContext(FdcApiContext);
  const keys = ids.map(partial(getKey, API_KEY));
  const { data: datas, error } = useSWR<(FoodResult | FDAErrorResponse)[]>(
    keys,
    multiFetcher
  );
  return { datas, error };
};

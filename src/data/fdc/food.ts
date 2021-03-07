import useSWR from "swr";
import { foodResultToHealthyFood } from "../models";
import { FDAErrorResponse, FoodResult } from "./types";

const API_KEY = "EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP";

const getKey = (id: number) => {
  if (!id) return null;
  return `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=${API_KEY}`;
};

export const useFood = (id: number) => {
  const { data, error } = useSWR<FoodResult, FDAErrorResponse>(getKey(id));
  const food = data && foodResultToHealthyFood(data);
  return { food, data, error };
};

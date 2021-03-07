import React from "react";
import { Meal } from "../data/models";
import { usePersistentState } from "../hooks/usePersistentState";

export const MealsContext = React.createContext<{
  meals: Meal[];
  setMeals: (meals: Meal[]) => void;
}>({
  meals: [],
  setMeals: () => {},
});

export const MealsProvider: React.FC = (props) => {
  const [meals = [], setMeals] = usePersistentState<Meal[]>("meals");
  const value = { meals, setMeals };
  return <MealsContext.Provider value={value} {...props} />;
};

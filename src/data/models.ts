import { FoodResult, SearchFood } from "./fdc/types";

export interface HealthyFood {
  name: string;
  brand: string;
  id: number;
}

export const searchFoodToHealthyFood = (food: SearchFood): HealthyFood => ({
  name: food.description,
  brand: food.brandOwner,
  id: food.fdcId,
});

export const foodResultToHealthyFood = (food: FoodResult): HealthyFood => ({
  name: food.description,
  brand: food.brandOwner,
  id: food.fdcId,
});

export interface Morsel {
  id: number;
  amount: number;
  unit: string;
}

export interface Meal {
  date: string;
  foods: Morsel[];
}

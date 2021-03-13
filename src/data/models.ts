import { FoodResult, SearchFood, SearchNutrient } from "./fdc/types";

export interface HealthyFood {
  name: string;
  brand: string;
  id: number;
  nutrients: HealthyNutrient[];
}

export const searchNutrientToHealthyNutrient = (
  nutrient: SearchNutrient
): HealthyNutrient => ({
  name: nutrient.nutrientName,
  id: nutrient.nutrientId,
  value: nutrient.value,
  unit: nutrient.unitName,
});

export const searchFoodToHealthyFood = (food: SearchFood): HealthyFood => ({
  name: food.description,
  brand: food.brandOwner,
  id: food.fdcId,
  nutrients: food.foodNutrients
    .map(searchNutrientToHealthyNutrient)
    .filter(nutrientsWeCareAbout)
    .sort(nutrientOrder),
});

export const foodResultToHealthyFood = (food: FoodResult): HealthyFood => ({
  name: food.description,
  brand: food.brandOwner,
  id: food.fdcId,
  nutrients: [],
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

export interface UnitValue {
  unit: string;
  value: number;
}

export interface HealthyNutrient extends UnitValue {
  name: string;
  id: number;
}

export const nutrientsWeCareAbout = (nutrient: HealthyNutrient): boolean =>
  nutrientNames.includes(nutrient.name);

export const nutrientOrder = (a: HealthyNutrient, b: HealthyNutrient): number =>
  nutrientNames.indexOf(a.name) - nutrientNames.indexOf(b.name);

export const nutrientNames = [
  "Protein",
  "Energy",
  "Total lipid (fat)",
  "Vitamin C, total ascorbic acid",
];

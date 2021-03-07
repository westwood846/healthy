import React, { useContext } from "react";
import { Food } from "../components/Food";
import { Meal } from "../components/Meal";
import { MealsContext } from "../contexts/meals";

export const Meals: React.FC = () => {
  const { meals = [], setMeals } = useContext(MealsContext);
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.date}>
          <Meal meal={meal} />
        </li>
      ))}
    </ul>
  );
};

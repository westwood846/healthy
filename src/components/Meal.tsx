import React, { HTMLAttributes } from "react";
import { useFood } from "../data/fdc/food";
import { Meal as IMeal, Morsel as IMorsel } from "../data/models";

interface EatenFoodProps extends HTMLAttributes<HTMLElement> {
  morsel: IMorsel;
}

const Morsel: React.FC<EatenFoodProps> = ({ morsel, ...props }) => {
  const { food, error } = useFood(morsel.id);

  return (
    <div {...props}>
      {error && error.toString()}
      {!food && !error && "loading..."}
      {food && `${food?.name} (${food?.brand})`}
    </div>
  );
};

export interface Props extends HTMLAttributes<HTMLElement> {
  meal: IMeal;
}

export const Meal: React.FC<Props> = ({ meal, ...props }) => {
  return (
    <div {...props}>
      <h1>{meal.date}</h1>
      <ul>
        {meal.foods.map((food) => (
          <li key={food.id}>
            <Morsel morsel={food} />
          </li>
        ))}
      </ul>
    </div>
  );
};

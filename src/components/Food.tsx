import React from "react";
import { HealthyFood } from "../data/models";

export interface Props {
  food: HealthyFood;
  actions: React.ReactNode;
}

export const Food: React.FC<Props> = ({ food, actions }) => {
  return (
    <span>
      {food.name}, {food.brand} {actions}
    </span>
  );
};

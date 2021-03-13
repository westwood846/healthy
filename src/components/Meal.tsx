import React, { HTMLAttributes } from "react";
import styled from "styled-components";
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
      {food && `${morsel.amount}${morsel.unit} ${food?.name} (${food?.brand})`}
    </div>
  );
};

export const MorselList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`;

export interface Props extends HTMLAttributes<HTMLElement> {
  meal: IMeal;
}

export const Meal: React.FC<Props> = ({ meal, ...props }) => {
  return (
    <div {...props}>
      <h1>{meal.date}</h1>
      <MorselList>
        {meal.foods.map((food) => (
          <li key={food.id}>
            <Morsel morsel={food} />
          </li>
        ))}
      </MorselList>
      <table>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {meal.foods.map((food) => (
            <tr>
              <td>{food.id}</td>
              <td>{food.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

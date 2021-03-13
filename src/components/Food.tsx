import React from "react";
import styled from "styled-components";
import { HealthyFood } from "../data/models";

export interface Props {
  food: HealthyFood;
  actions: React.ReactNode;
}

const Container = styled.div`
  max-width: 400px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const NutrientList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
`;

export const Food: React.FC<Props> = ({ food, actions }) => {
  return (
    <Container>
      <FirstRow>
        <div>
          <strong>{food.name}</strong> {food.brand && `(${food.brand})`}
        </div>
        <div>{actions}</div>
      </FirstRow>
      <NutrientList>
        {food.nutrients.map((nutrient) => (
          <li>
            {nutrient.name}:{" "}
            {nutrient.value ? `${nutrient.value}${nutrient.unit}` : "unknown"}
          </li>
        ))}
      </NutrientList>
    </Container>
  );
};

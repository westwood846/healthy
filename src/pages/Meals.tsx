import { orderBy } from "lodash";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Meal } from "../components/Meal";
import { Page } from "../components/primitives/Page";
import { MealsContext } from "../contexts/meals";

const IndexControls = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Meals: React.FC = () => {
  const { meals = [] } = useContext(MealsContext);
  const sortedMeals = useMemo(() => orderBy(meals, ["date"], ["desc"]), [
    meals,
  ]);
  const [index, setIndex] = useState<number>(0);
  useEffect(
    function resetIndex() {
      setIndex(0);
    },
    [meals]
  );
  const hasPrevious = index < sortedMeals.length - 1;
  const goToPreviousMeal = () => {
    if (hasPrevious) {
      setIndex(index + 1);
    }
  };
  const hasNext = index > 0;
  const goToNextMeal = () => {
    if (hasNext) {
      setIndex(index - 1);
    }
  };
  const meal = sortedMeals[index];
  return (
    <Page>
      <h2>Meals</h2>
      <IndexControls>
        <button onClick={goToPreviousMeal} disabled={!hasPrevious}>
          &lt; Prev
        </button>
        <button onClick={goToNextMeal} disabled={!hasNext}>
          Next &gt;
        </button>
      </IndexControls>
      {meal && <Meal meal={meal} />}
    </Page>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { useFood } from "../data/fdc/food";
import { Button } from "./primitives/Button";
import { Input } from "./primitives/Input";
import { Modal } from "./primitives/Modal";
import moment from "moment";
import { MealsContext } from "../contexts/meals";
import { find, findIndex } from "lodash";
import { arraySet } from "../helpers";

export const AddToMeal: React.FC<{ id: number; onDone: () => void }> = ({
  id,
  onDone,
}) => {
  const { food, error } = useFood(id);
  const [amount, setAmount] = useState<number>(100);
  const [date, setDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const { meals, setMeals } = useContext(MealsContext);
  const reset = () => {
    setAmount(100);
  };
  useEffect(function setUpReset() {
    reset();
    return reset;
  }, []);
  const addFoodToMeal = (id: number, amount: number, date: string) => {
    const existingMealIndex = findIndex(meals || [], { date });
    const newFood = { id, amount, unit: "g" };
    console.log({ existingMealIndex });
    if (existingMealIndex === -1) {
      setMeals([
        ...(meals || []),
        {
          date,
          foods: [newFood],
        },
      ]);
    } else {
      const existingMeal = meals[existingMealIndex];
      setMeals(
        arraySet(meals, existingMealIndex, {
          ...existingMeal,
          foods: [...existingMeal.foods, newFood],
        })
      );
    }
  };
  return (
    <>
      {error && <code>{JSON.stringify(error)}</code>}
      {!food && "loading..."}
      <label>
        Which meal?
        <Input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        How Much {food?.name}?
        <Input
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />
      </label>
      <Button
        onClick={() => {
          onDone();
        }}
      >
        Cancel
      </Button>
      <Button
        onClick={() => {
          addFoodToMeal(id, amount, date);
          onDone();
        }}
      >
        Do it baby!
      </Button>
    </>
  );
};

export const AddToMealModal: React.FC<{
  id: number;
  isOpen: boolean;
  onClose: () => void;
}> = ({ id, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Food To Meal">
      <AddToMeal id={id} onDone={onClose} />
    </Modal>
  );
};

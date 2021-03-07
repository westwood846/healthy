import React, { useContext, useState } from "react";
import { Food } from "../components/Food";
import { Input } from "../components/primitives/Input";
import { MealsContext } from "../contexts/meals";
import { StarredContext } from "../contexts/starred";
import { useSearch } from "../data/fdc/search";
import { searchFoodToHealthyFood } from "../data/models";

export const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { data, error } = useSearch(query);
  const foods = data?.foods?.map(searchFoodToHealthyFood);
  const { starred, setStarred } = useContext(StarredContext);
  const { meals, setMeals } = useContext(MealsContext);
  return (
    <>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ol>
        {(foods || []).map((food) => (
          <li>
            <Food
              food={food}
              actions={
                <div>
                  <button
                    onClick={() => setStarred([...(starred || []), food.id])}
                  >
                    {starred?.includes(food.id) ? "Unstar" : "Star"}
                  </button>
                  <button
                    onClick={() =>
                      setMeals([
                        ...(meals || []),
                        {
                          date: new Date().toISOString(),
                          foods: [{ id: food.id, amount: 1, unit: "g" }],
                        },
                      ])
                    }
                  >
                    Log
                  </button>
                </div>
              }
            />
          </li>
        ))}
      </ol>
      <pre>
        <code>{JSON.stringify(error, null, 2)}</code>
      </pre>
    </>
  );
};

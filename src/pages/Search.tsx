import { uniq, without } from "lodash";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AddToMealModal } from "../components/AddToMeal";
import { Food } from "../components/Food";
import { Button } from "../components/primitives/Button";
import { Input } from "../components/primitives/Input";
import { Page } from "../components/primitives/Page";
import { StarredContext } from "../contexts/starred";
import { useSearch } from "../data/fdc/search";
import { DataType } from "../data/fdc/types";
import { searchFoodToHealthyFood } from "../data/models";
import { usePersistentState } from "../hooks/usePersistentState";

export const SearchBar = styled(Input).attrs({ type: "text" })`
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const SearchResults = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  li {
    list-style: none;
  }
`;

export const Search: React.FC = () => {
  const [query, setQuery] = usePersistentState<string>("searchQuery", "");
  const [dataTypes, setDataTypes] = useState<DataType[]>([DataType.FOUNDATION]);
  const { data, error } = useSearch(query, dataTypes);
  const foods = data?.foods?.map(searchFoodToHealthyFood) || [];
  const { starred, setStarred } = useContext(StarredContext);
  const selectDataType = (dataType: DataType) => {
    console.log("select!");
    setDataTypes(uniq([...(dataTypes || []), dataType]));
  };
  const unselectDataType = (dataType: DataType) =>
    setDataTypes(without(dataTypes, dataType));

  const [selectedFood, setSelectedFood] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = (id: number) => {
    setSelectedFood(id);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFood(undefined);
  };

  return (
    <Page>
      {selectedFood && (
        <AddToMealModal
          id={selectedFood}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search For Food"
      />
      <div>
        {Object.values(DataType).map((dataType) => (
          <label
            style={{
              marginRight: "10px",
            }}
          >
            <input
              type="checkbox"
              key={dataType}
              name={dataType}
              defaultChecked={dataTypes?.includes(dataType)}
              onChange={(e) =>
                (e.target.checked ? selectDataType : unselectDataType)(dataType)
              }
            />
            {dataType}
          </label>
        ))}
      </div>
      <SearchResults>
        {foods.map((food) => (
          <li key={food.id}>
            <Food
              food={food}
              actions={
                <div>
                  <Button
                    onClick={() => setStarred([...(starred || []), food.id])}
                  >
                    {starred?.includes(food.id) ? "Unstar" : "Star"}
                  </Button>
                  <Button onClick={() => openModal(food.id)}>Log</Button>
                </div>
              }
            />
          </li>
        ))}
      </SearchResults>
      <pre>
        <code>{JSON.stringify(error, null, 2)}</code>
      </pre>
    </Page>
  );
};

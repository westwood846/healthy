import { uniq, without } from "lodash";
import React, { useContext } from "react";
import { Food } from "../components/Food";
import { StarredContext } from "../contexts/starred";
import { useFood } from "../data/fdc/food";
import { usePersistentState } from "../hooks/usePersistentState";

interface ItemProps {
  id: number;
}

const Item: React.FC<ItemProps> = ({ id }) => {
  const { food, error } = useFood(id);
  const { starred, setStarred } = useContext(StarredContext);
  const loading = !food && !error;
  const isStarred = starred?.includes(id);
  const star = () => setStarred(uniq([...(starred || []), id]));
  const unstar = () => setStarred(without(starred, id));
  return (
    <>
      {loading && <span>Loading...</span>}
      {food && (
        <Food
          food={food}
          actions={
            <>
              <button onClick={isStarred ? unstar : star}>
                {isStarred ? "Unstar" : "Star"}
              </button>
            </>
          }
        />
      )}
      {JSON.stringify(error)}
    </>
  );
};

export const Starred: React.FC = () => {
  const [starred, setStarred] = usePersistentState<number[]>("starred");
  return (
    <>
      <ul>
        {(starred || []).map((id) => (
          <li key={id}>
            <Item id={id} />
          </li>
        ))}
      </ul>
      <button onClick={() => setStarred([])}>Clear Starred Items</button>
    </>
  );
};

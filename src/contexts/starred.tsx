import React from "react";
import { usePersistentState } from "../hooks/usePersistentState";

export const StarredContext = React.createContext<{
  starred: number[];
  setStarred: (starred: number[]) => void;
}>({
  starred: [],
  setStarred: () => {},
});

export const StarredProvider: React.FC = (props) => {
  const [starred = [], setStarred] = usePersistentState<number[]>("starred");
  const value = { starred, setStarred };
  return <StarredContext.Provider value={value} {...props} />;
};

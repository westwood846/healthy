import React from "react";
import { usePersistentState } from "../hooks/usePersistentState";

export const FdcApiContext = React.createContext<{
  key: string;
  setKey: (key: string) => void;
}>({
  key: "EXKD4pinV1LPdlzNNnGWnI4IBh0GvmycfTVMJexP",
  setKey: () => {},
});

export const FdcApiKeyProvider: React.FC = (props) => {
  const [key = "", setKey] = usePersistentState<string>("API_KEY");
  const value = { key, setKey };
  return <FdcApiContext.Provider value={value} {...props} />;
};

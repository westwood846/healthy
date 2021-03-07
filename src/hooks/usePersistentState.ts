import { useEffect, useState } from "react";

export const usePersistentState = <T>(key: string) => {
  const [state, setState] = useState<T>();
  useEffect(
    function readOnMount() {
      const raw = localStorage.getItem(key);
      if (raw) setState(JSON.parse(raw));
    },
    [key]
  );
  const setStateExternal = (value: T) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setStateExternal] as const;
};

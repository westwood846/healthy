import { useCallback, useEffect, useState } from "react";

export const usePersistentState = <T>(key: string, def?: T) => {
  const [state, setState] = useState<T>();
  useEffect(
    function readOnMount() {
      const raw = localStorage.getItem(key);
      if (raw) setState(JSON.parse(raw));
      else setState(def);
    },
    [def, key]
  );
  const setStateExternal = useCallback(
    (value: T) => {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );
  return [state, setStateExternal] as const;
};

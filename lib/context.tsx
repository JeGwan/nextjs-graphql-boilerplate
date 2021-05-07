import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Host } from "./types";

interface AppContextType {
  me?: Host | null;
  setMe: (me: Host) => void;
}
interface AppContextProviderProps {
  children?: ReactNode;
}
export const AppContext = createContext<AppContextType>({
  me: undefined,
  setMe: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [me, setMe] = useState<Host | null>();

  useEffect(() => {
    if (!me) {
      // authentication 예시
      const someCondition = false;
      if (someCondition) {
        // setMe(user)
      } else {
        setMe(null);
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ me, setMe }}>{children}</AppContext.Provider>
  );
};

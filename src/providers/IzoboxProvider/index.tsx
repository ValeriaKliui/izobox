import { useIzobox } from "@hooks/useIzobox";
import { createContext, FC, ReactNode } from "react";

import { IzoboxContextType } from "./interfaces";

export const IzoboxContext = createContext<IzoboxContextType | null>(null);

export const IzoboxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useIzobox();

  return (
    <IzoboxContext.Provider value={value}>{children}</IzoboxContext.Provider>
  );
};

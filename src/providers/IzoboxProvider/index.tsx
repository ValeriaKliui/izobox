import { IZOBOXES } from "@constants/index";
import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { useIzobox } from "@hooks/useIzobox";
import { Izobox, IzoboxContextType } from "./interfaces";

export const IzoboxContext = createContext<IzoboxContextType | null>(null);

export const IzoboxProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = useIzobox()

    return (
        <IzoboxContext.Provider value={value}>{children}</IzoboxContext.Provider>
    );
};

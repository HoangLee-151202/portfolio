"use client";
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { getFullscreenState } from "@/hooks/use-fullscreen";

interface AppContextType {
  isFullScreen: boolean;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isFullScreen, setIsFullscreen] = useState<boolean>(getFullscreenState())

  return (
    <AppContext.Provider
      value={{
        isFullScreen,
        setIsFullscreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook để sử dụng context
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

"use client";
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { MAIN_MENU, MAIN_MENU_TYPE } from "../config/menu";
import { getFullscreenState } from "@/hooks/use-fullscreen";

interface AppContextType {
  defaultActiveSection: string;
  activeSection: MAIN_MENU_TYPE;
  onChangeActiveSection: (section: MAIN_MENU_TYPE) => void;
  resetActiveSection: () => void;
  isFullScreen: boolean;
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const defaultActiveSection = MAIN_MENU[0].id;
  const [activeSection, setActiveSection] =
    useState<MAIN_MENU_TYPE>(defaultActiveSection);

  const [isFullScreen, setIsFullscreen] = useState<boolean>(getFullscreenState())
  const onChangeActiveSection = (section: MAIN_MENU_TYPE) => {
    setActiveSection(section);
  };

  const resetActiveSection = () => {
      setActiveSection(defaultActiveSection);
  };

  return (
    <AppContext.Provider
      value={{
        defaultActiveSection,
        activeSection,
        onChangeActiveSection,
        resetActiveSection,
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

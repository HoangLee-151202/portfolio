"use client"

import { PersonalInfoData } from "@/app/mocks/personal-info";
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { SkillsViewType } from "../lib/types";

type PaginationState = {
  page: number; // trang hiện tại (1-based)
  pageSize: number; // số item / trang
  totalItems: number; // tổng item

  totalPages: number; // tổng số trang

  isLoading: boolean;
  hasNext: boolean;
  hasPrev: boolean;
};

type FilterType = {
  skill: string;
  type: string;
}

interface SkillsContextType {
  isFullScreen: boolean;
  setIsFullScreen: Dispatch<SetStateAction<boolean>>
  projects: typeof PersonalInfoData.skills.projects,
  setProjects: Dispatch<SetStateAction<typeof PersonalInfoData.skills.projects>>
  pagination: PaginationState,
  setPagination: Dispatch<SetStateAction<PaginationState>>,
  filter: FilterType,
  setFilter: Dispatch<SetStateAction<FilterType>>,
  viewActive: SkillsViewType,
  setViewActive: Dispatch<SetStateAction<SkillsViewType>>,
}

interface SkillsProviderProps {
  viewActive: SkillsViewType,
  setViewActive: Dispatch<SetStateAction<SkillsViewType>>,
  children: ReactNode;
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export const SkillsProvider = ({ viewActive, setViewActive, children }: SkillsProviderProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [projects, setProjects] = useState<typeof PersonalInfoData.skills.projects>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    pageSize: 10,
    totalItems: 0,

    totalPages: 0,

    isLoading: false,
    hasNext: false,
    hasPrev: false,
  });

  const [filter, setFilter] = useState({
    skill: "",
    type: "",
  });

  return (
    <SkillsContext.Provider
      value={{
        isFullScreen,
        setIsFullScreen,
        projects,
        setProjects,
        pagination,
        setPagination,
        filter,
        setFilter,
        viewActive,
        setViewActive
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
};

// Hook để sử dụng context
export const useSkills = (): SkillsContextType => {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error("useSkills must be used within an SkillsProvider");
  }
  return context;
};

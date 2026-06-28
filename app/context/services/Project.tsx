'use client'

import { Projects } from '@/app/types/projects'
import React, { createContext, useContext } from 'react'

interface ProjectsContextType {
  projectsOutstanding?: Projects[]| null
  projects?: Projects[]
  project?: Projects
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export function ProjectsProvider({ 
  children,
  projectsOutstanding, 
  projects,
  project
}: { 
  children: React.ReactNode
  projectsOutstanding?: Projects[] | null
  projects?: Projects[]
  project?: Projects
}) {
  return (
    <ProjectsContext.Provider value={{ projectsOutstanding, projects, project }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (!context) {
    throw new Error('useProjects phải được đặt bên trong ProjectProvider')
  }
  return context
}
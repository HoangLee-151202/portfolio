import { Techs } from "./techs"

export interface Projects {
    id: string
    name: string
    description: string
    images: string
    techs: Techs[]
    type: string[]
    created_at: string
  }
export interface Technology {
  package: string
  name: string
  description: string
}

export type TechnologyList = Record<string, Technology>

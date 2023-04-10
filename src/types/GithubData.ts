export interface GithubData {
  user: User
  rateLimit: {
    cost: number
    nodeCount: number
    limit: number
    remaining: number
    resetAt: string
    used: number
  }
}

export type User = {
  avatarUrl: string
  bio: string | null
  company: string | null
  createdAt: string
  email: string | null
  isHireable: boolean
  location: string | null
  login: string
  name: string | null
  pronouns: string | null
  url: string
  followers: {
    totalCount: number
  }
  websiteUrl: string | null
  socialAccounts: {
    nodes: {
      url: string
      provider: string
    }[]
  }
  contributionsCollection: {
    totalRepositoryContributions: number
    totalRepositoriesWithContributedCommits: number
    startedAt: string
    contributionCalendar: {
      totalContributions: number
    }
  }
  repositories: {
    edges: Repository[]
  }
}

export type Repository = {
  node: {
    url: string
    name: string
    updatedAt: string
    isFork: boolean
    forkCount: number
    description: string | null
    createdAt: string
    isEmpty: boolean
    languages: Languages
    object: {
      text: string | null
    }
  }
}

export type Language = {
  node: {
    name: string
    color: string
  }
  size: number
}

export type Languages = {
  edges: Language[]
}

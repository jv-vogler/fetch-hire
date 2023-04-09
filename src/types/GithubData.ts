export interface GithubData {
  user: {
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
      edges: {
        node: {
          url: string
          name: string
          updatedAt: string
          isFork: boolean
          forkCount: number
          description: string | null
          createdAt: string
          isEmpty: boolean
          languages: {
            edges: {
              node: {
                name: string
                color: string
              }
              size: number
            }[]
          }
          object: {
            text: string | null
          }
        }
      }[]
    }
  }
  rateLimit: {
    cost: number
    nodeCount: number
    limit: number
    remaining: number
    resetAt: string
    used: number
  }
}

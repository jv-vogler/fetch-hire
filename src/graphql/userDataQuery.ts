import { gql } from 'graphql-request'

export const USER_DATA_QUERY = gql`
  query getUserData($login: String!) {
    user(login: $login) {
      avatarUrl
      bio
      company
      createdAt
      email
      isHireable
      location
      login
      name
      pronouns
      url
      followers {
        totalCount
      }
      websiteUrl
      socialAccounts(first: 10) {
        nodes {
          url
          provider
        }
      }
      contributionsCollection {
        totalRepositoryContributions
        totalRepositoriesWithContributedCommits
        startedAt
        contributionCalendar {
          totalContributions
        }
      }
      repositories(
        isFork: false
        first: 100
        orderBy: { field: PUSHED_AT, direction: DESC }
        isLocked: false
        privacy: PUBLIC
      ) {
        edges {
          node {
            url
            name
            updatedAt
            isFork
            forkCount
            description
            createdAt
            isEmpty
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                node {
                  name
                  color
                }
                size
              }
            }
            object(expression: "HEAD:package.json") {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
    rateLimit {
      cost
      nodeCount
      limit
      remaining
      resetAt
      used
    }
  }
`

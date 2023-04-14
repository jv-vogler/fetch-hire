import { ClientError, GraphQLClient } from 'graphql-request'

import { USER_DATA_QUERY } from '@/graphql/userDataQuery'
import { GithubData } from '@/types/GithubData'

const GITHUB_API_BASE_URL = 'https://api.github.com/graphql'
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

const graphQLClient = new GraphQLClient(GITHUB_API_BASE_URL, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
})

export const fetchUserData = async (login: string) => {
  if (!login) return

  try {
    const userData = await graphQLClient.request<GithubData>(USER_DATA_QUERY, { login })
    return userData
  } catch (err) {
    const error = err as ClientError

    if (error.response.status > 200) {
      throw new Error(error.response.errors && error.response.errors[0].message)
    } else {
      return error.response.data as GithubData
    }
  }
}

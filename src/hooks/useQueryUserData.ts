import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { ClientError } from 'graphql-request'

import { fetchUserData } from '@/services/github/githubApi'
import { GithubData } from '@/types/GithubData'

const CACHE_DURATION_MINS = 60

export const useQueryUserData = (login: string) => {
  const queryClient = useQueryClient()

  if (typeof window !== 'undefined') {
    const localStoragePersister = createSyncStoragePersister({ storage: window.localStorage })
    persistQueryClient({
      queryClient,
      persister: localStoragePersister,
      maxAge: CACHE_DURATION_MINS * 60 * 1000,
    })
  }

  return useQuery({
    queryKey: ['user-data', login],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: (count, error) => {
      const e = error as ClientError
      if (count < 2 && e.response.status > 200) {
        return true
      } else {
        return count < 1
      }
    },
    retryOnMount: true,
    refetchOnWindowFocus: false,
    cacheTime: CACHE_DURATION_MINS * 60 * 1000,
    staleTime: Infinity,
    useErrorBoundary: false,
    onError: err => {
      const error = err as ClientError
      const response = error.response.data as GithubData
      console.log(response)
    },
  })
}

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'

import { fetchUserData } from '@/services/github/githubApi'

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
    queryKey: ['user-data', login.toLowerCase()],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: 3,
    retryDelay: attemptIndex => Math.min(3000 * 2 ** attemptIndex, 30000),
    retryOnMount: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    cacheTime: CACHE_DURATION_MINS * 60 * 1000,
    staleTime: Infinity,
  })
}

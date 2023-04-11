import { useQuery } from '@tanstack/react-query'

import { fetchUserData } from '@/services/github/githubApi'

const CACHE_DURATIION_MINS = 30

export const useQueryUserData = (login: string) => {
  return useQuery({
    queryKey: ['user-data', login],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: 2,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: CACHE_DURATIION_MINS * 60 * 1000,
  })
}

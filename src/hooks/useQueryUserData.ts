import { useQuery } from '@tanstack/react-query'

import { fetchUserData } from '@/services/github/githubApi'

const CACHE_DURATIION_MINS = 10

export const useQueryUserData = (login: string) => {
  return useQuery({
    queryKey: ['user-data', login],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: CACHE_DURATIION_MINS * 60 * 1000,
    staleTime: Infinity,
  })
}

import { useEffect, useState } from 'react'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'

import { fetchUserData } from '@/services/github/githubApi'
import { createIDBPersister } from '@/utils/idbPersister'

const CACHE_DURATION_MINS = 60

export const useQueryUserData = (login: string) => {
  const queryClient = useQueryClient()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('success')

  if (typeof window !== 'undefined') {
    const idbPersister = createIDBPersister('git-hire-cache')

    persistQueryClient({
      queryClient,
      persister: idbPersister,
      maxAge: CACHE_DURATION_MINS * 60 * 1000,
    })
  }

  const {
    data,
    error,
    status: rqStatus,
  } = useQuery({
    queryKey: ['user-data', login.toLowerCase()],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: 3,
    retryDelay: attemptIndex => Math.min(6000 * 2 ** attemptIndex, 30000),
    retryOnMount: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    cacheTime: CACHE_DURATION_MINS * 60 * 1000,
    staleTime: Infinity,
  })

  useEffect(() => {
    switch (rqStatus) {
      case 'success':
        data?.user ? setStatus('success') : setStatus('error')
        break
      case 'loading':
        login ? setStatus('loading') : setStatus('success')
        break
      case 'error':
        setStatus('error')
        break
    }
  }, [login, data, rqStatus])

  return { data, error, status }
}

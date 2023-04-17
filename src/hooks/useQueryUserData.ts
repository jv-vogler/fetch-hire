import { useEffect, useState } from 'react'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'

import { fetchUserData } from '@/services/github/githubApi'
import { createIDBPersister } from '@/utils/idbPersister'

const CACHE_DURATION_MINS = 60

export const useQueryUserData = (login: string) => {
  const queryClient = useQueryClient()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('success')
  const [error, setError] = useState<{ message: string } | null>(null)
  const {
    data,
    error: rqError,
    status: rqStatus,
  } = useQuery({
    queryKey: ['user-data', login.toLowerCase()],
    queryFn: () => fetchUserData(login),
    enabled: !!login,
    retry: 3,
    retryDelay: 12 * 1000,
    retryOnMount: true,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    cacheTime: CACHE_DURATION_MINS * 24 * 60 * 1000,
    staleTime: Infinity,
  })

  // Sets the custom 'status'
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

  // Sets the custom 'error'
  useEffect(() => {
    if (rqError) {
      setError({ message: 'Something went wrong... Please try again later.' })
      return
    }
    if (login && !data?.user && rqStatus !== 'loading') {
      setError({ message: 'Could not find user' + ` '${login}'.` })
      return
    }
    setError(null)
  }, [data?.user, login, rqError, rqStatus])

  // Persist cache to IndexedDB
  if (typeof window !== 'undefined') {
    const idbPersister = createIDBPersister('git-hire-cache')

    persistQueryClient({
      queryClient,
      persister: idbPersister,
      maxAge: CACHE_DURATION_MINS * 60 * 1000,
    })
  }

  return { data, error, status }
}

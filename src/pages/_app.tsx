import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

import '@/styles/globals.css'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  )
}

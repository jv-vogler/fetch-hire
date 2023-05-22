import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { appWithI18Next } from 'ni18n'

import '@/styles/globals.css'

import { ni18nConfig } from '../../ni18n.config'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
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

export default appWithI18Next(App, ni18nConfig)

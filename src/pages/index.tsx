import { useState } from 'react'
import { CircleFlag } from 'react-circle-flags'
import { useTranslation } from 'react-i18next'
import { MagnifyingGlass } from 'react-loader-spinner'
import Switch from 'react-switch'

import Footer from '@/components/Footer'
import Searchbar from '@/components/Searchbar'
import UserData from '@/components/UserData'
import { useQueryUserData } from '@/hooks/useQueryUserData'
import { useRepos } from '@/hooks/useRepos'

const Home = () => {
  const [githubUser, setGithubUser] = useState('')
  const { data, status } = useQueryUserData(githubUser)
  const { languages, technologies } = useRepos(data?.user && data?.user.repositories.edges)
  const { t, i18n } = useTranslation()

  function toggleLanguage() {
    i18n.language === 'en' ? i18n.changeLanguage('pt-BR') : i18n.changeLanguage('en')
  }

  return (
    <div className="flex h-screen flex-col gap-8 text-zinc-300">
      <div className="fixed z-50 flex h-20 w-full items-center justify-between bg-gradient-to-b from-zinc-900 via-[#232526] via-50% to-transparent px-4">
        <h1 className="select-none p-2 text-3xl font-bold">
          <span className="border-b-4 border-orange-400">FetchHire</span>
        </h1>
        <Switch
          onChange={toggleLanguage}
          checked={i18n.language === 'en'}
          checkedIcon={false}
          uncheckedIcon={false}
          checkedHandleIcon={<CircleFlag countryCode="us" width={30} />}
          uncheckedHandleIcon={<CircleFlag countryCode="br" width={30} />}
          offColor="#555"
          onColor="#555"
          width={60}
          height={30}
          aria-label={t('ToggleLanguage') || 'Toggle language'}
          tabIndex={0}
        />
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 p-4">
        <Searchbar setGithubUser={setGithubUser} status={status} />
        {status === 'error' && (
          <div className="-translate-y-7 text-sm text-red-500">
            {i18n.language === 'en' ? (
              <>
                User <span className="font-bold">{githubUser}</span> not found.
              </>
            ) : (
              <>
                Usuário <span className="font-bold">{githubUser}</span> não encontrado.
              </>
            )}
          </div>
        )}

        {status === 'loading' && (
          <div className="-translate-y-5">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#FB923C"
            />
          </div>
        )}
        {data?.user && <UserData data={data} languages={languages} technologies={technologies} />}
      </div>

      <Footer />
    </div>
  )
}

export default Home

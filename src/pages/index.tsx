import { useState } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

import Searchbar from '@/components/Searchbar'
import UserData from '@/components/UserData'
import { useQueryUserData } from '@/hooks/useQueryUserData'
import { useRepos } from '@/hooks/useRepos'

const Home = () => {
  const [githubUser, setGithubUser] = useState('')
  const { data, error, status } = useQueryUserData(githubUser)
  const { languages, technologies } = useRepos(data?.user && data?.user.repositories.edges)

  return (
    <div className="flex flex-col gap-8 text-zinc-300">
      <div className="fixed z-50 h-20 w-full bg-gradient-to-b from-zinc-900 via-[#232526] via-50% to-transparent">
        <h1 className="select-none p-2 text-3xl font-bold">
          <span className="border-b-4 border-orange-400">FetchHire</span>
        </h1>
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 p-4">
        <Searchbar setGithubUser={setGithubUser} status={status} />
        {status === 'error' && (
          <div className="-translate-y-7 text-sm text-red-500">
            User <span className="font-bold">{githubUser}</span> not found.
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
    </div>
  )
}
export default Home

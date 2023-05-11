import { useState } from 'react'

import Searchbar from '@/components/Searchbar'
import UserData from '@/components/UserData'
import { useQueryUserData } from '@/hooks/useQueryUserData'
import { useRepos } from '@/hooks/useRepos'

const Home = () => {
  const [githubUser, setGithubUser] = useState('')
  const { data, error, status } = useQueryUserData(githubUser)
  const { languages, technologies } = useRepos(data?.user && data?.user.repositories.edges)

  return (
    <div className="flex flex-col gap-8 p-4 text-zinc-300">
      <h1 className="select-none p-2 text-3xl font-bold">
        <span className="border-b-4 border-orange-500">FetchHire</span>
      </h1>
      <div className="flex flex-col items-center gap-8">
        <Searchbar setGithubUser={setGithubUser} />
        {data?.user && (
          <UserData data={data} languages={languages} technologies={technologies} />
        )}{' '}
      </div>
    </div>
  )
}
export default Home

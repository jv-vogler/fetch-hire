import { useState } from 'react'

import Searchbar from '@/components/Searchbar'
import { useQueryUserData } from '@/hooks/useQueryUserData'
import { useRepos } from '@/hooks/useRepos'

const Home = () => {
  const [githubUser, setGithubUser] = useState('')
  const { data, error, status } = useQueryUserData(githubUser)
  const { languages, technologies } = useRepos(data?.user && data?.user.repositories.edges)

  return (
    <div className="flex flex-col p-4 text-zinc-300">
      <div className="flex flex-col items-center gap-4">
        <Searchbar setGithubUser={setGithubUser} />
        {data?.user.name}
      </div>
    </div>
  )
}
export default Home

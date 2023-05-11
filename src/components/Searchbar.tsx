import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react'

import { extractGitHubUsername } from '@/utils/utils'

type Props = {
  setGithubUser: Dispatch<SetStateAction<string>>
}

const Searchbar = ({ setGithubUser }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setGithubUser(extractGitHubUsername(searchInputValue))
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-2 p-2">
      <label className="-translate-x-3">
        Paste a Github <strong className="text-orange-400">username</strong> or{' '}
        <strong className="text-orange-400">URL</strong>.
      </label>
      <div className="flex">
        <input
          className="w-full max-w-xs rounded-l-xl border-2 bg-zinc-700 outline-none ring-inset transition-all duration-300 focus:border-2 focus:border-orange-400 focus:ring-0"
          type="text"
          ref={inputRef}
          spellCheck={false}
          onChange={onChange}
          value={searchInputValue}
        />
        <button
          className="rounded-r-lg bg-zinc-500 px-2 font-bold text-white outline-none ring-inset transition-all duration-300 focus:ring-2 focus:ring-orange-400"
          ref={buttonRef}
        >
          Fetch!
        </button>
      </div>
    </form>
  )
}
export default Searchbar

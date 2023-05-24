import { Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { extractGitHubUsername } from '@/utils/utils'

type Props = {
  setGithubUser: Dispatch<SetStateAction<string>>
  status: 'success' | 'error' | 'loading'
}

const Searchbar = ({ setGithubUser, status }: Props) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { t, i18n } = useTranslation()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setGithubUser(extractGitHubUsername(searchInputValue))
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-2 p-2">
      {i18n.language === 'pt-BR' ? (
        <label className="-translate-x-3">
          Cole um <strong className="text-orange-400">usuário</strong> ou{' '}
          <strong className="text-orange-400">URL</strong> do Github.
        </label>
      ) : (
        <label className="-translate-x-3">
          Paste a Github <strong className="text-orange-400">username</strong> or{' '}
          <strong className="text-orange-400">URL</strong>.
        </label>
      )}
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
          className="rounded-r-lg bg-zinc-500 px-2 font-bold text-white outline-none ring-inset transition-all duration-300 hover:text-orange-400 focus:ring-2 focus:ring-orange-400 disabled:text-zinc-400"
          ref={buttonRef}
          disabled={status === 'loading'}
        >
          {t('Fetch')}!
        </button>
      </div>
    </form>
  )
}

export default Searchbar

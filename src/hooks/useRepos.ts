import { useMemo } from 'react'

import { Language, Repository } from '@/types/GithubData'

type Props = Repository[] | undefined

type LangData = { name: string; color: string; size: number }

export const useRepos = (repos: Props) => {
  const languages = useCalculateLanguages(repos)

  return { languages }
}

const useCalculateLanguages = (repos: Props) => {
  const languages = useMemo(() => {
    if (!repos) return

    const mergedLanguages = repos
      .filter((repo) => !repo.node.isEmpty && !repo.node.isFork)
      .flatMap((repo) => repo.node.languages.edges)
      .reduce<Record<string, LangData>>((acc, lang) => accumulateLangData(acc, lang), {})

    const languagesArray = Object.values(mergedLanguages).sort((a, b) => b.size - a.size)

    const totalSize = languagesArray.reduce((acc, lang) => acc + lang.size, 0)

    const languagesWithPercentage = languagesArray.map((lang) => ({
      name: lang.name,
      color: lang.color,
      percentage: ((lang.size / totalSize) * 100).toFixed(1),
    }))

    return languagesWithPercentage
  }, [repos])

  return languages
}

const accumulateLangData = (acc: Record<string, LangData>, lang: Language) => {
  // prettier-ignore
  const { node: { name, color }, size } = lang
  acc[name] = acc[name] ? { name, color, size: acc[name].size + size } : { name, color, size: size }

  return acc
}

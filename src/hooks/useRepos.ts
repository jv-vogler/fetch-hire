import { useMemo } from 'react'

import { Language, Repository } from '@/types/GithubData'
import { parsePackageJsonList } from '@/utils/parsers'

type Props = Repository[] | undefined

type LangData = { name: string; color: string; size: number }

export const useRepos = (repos: Props) => {
  const languages = useCalculateLanguages(repos)
  const technologies = useCaculateTechnologies(repos)

  return { languages, technologies }
}

const useCaculateTechnologies = (repos: Props) => {
  const technologies = useMemo(() => {
    if (!repos) return

    const initialDependenciesList = {
      packageJsonList: [] as string[],
      requirementsList: [] as string[],
      gemfileList: [] as string[],
      composerList: [] as string[],
    }

    const dependenciesLists = repos.reduce((acc, repo) => {
      const { packageJson, requirements, gemfile, composer } = repo.node
      packageJson && packageJson.text && acc.packageJsonList.push(packageJson.text)
      requirements && requirements.text && acc.requirementsList.push(requirements.text)
      gemfile && gemfile.text && acc.gemfileList.push(gemfile.text)
      composer && composer.text && acc.composerList.push(composer.text)

      return acc
    }, initialDependenciesList)

    const technologiesUsed = {
      ...parsePackageJsonList(dependenciesLists.packageJsonList),
      //TODO add other parse methods
    }

    return technologiesUsed
  }, [repos])

  return technologies
}

const useCalculateLanguages = (repos: Props) => {
  const languages = useMemo(() => {
    if (!repos) return

    const mergedLanguages = repos
      .flatMap(repo => repo.node.languages.edges)
      .reduce<Record<string, LangData>>((acc, lang) => accumulateLangData(acc, lang), {})

    const languagesArray = Object.values(mergedLanguages).sort((a, b) => b.size - a.size)

    const totalSize = languagesArray.reduce((acc, lang) => acc + lang.size, 0)

    const languagesWithPercentage = languagesArray.map(lang => ({
      name: lang.name,
      color: lang.color,
      percentage: ((lang.size / totalSize) * 100).toFixed(2),
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

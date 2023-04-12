import { useMemo } from 'react'

import { Language, Repository } from '@/types/GithubData'
import {
  parseComposerList,
  parseGemfileList,
  parsePackageJsonList,
  parseRequirementsList,
} from '@/utils/parsers'

type Props = Repository[] | undefined

type LangData = { name: string; color: string; size: number }

export const useRepos = (repos: Props) => {
  const data = useMemo(() => {
    const languages = calculateLanguages(repos)
    const technologies = caculateTechnologies(repos)

    return { languages, technologies }
  }, [repos])

  return data
}

const caculateTechnologies = (repos: Props) => {
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
    ...parseRequirementsList(dependenciesLists.requirementsList),
    ...parseGemfileList(dependenciesLists.gemfileList),
    ...parseComposerList(dependenciesLists.composerList),
  }
  return technologiesUsed
}

const calculateLanguages = (repos: Props) => {
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
}

const accumulateLangData = (acc: Record<string, LangData>, lang: Language) => {
  // prettier-ignore
  const { node: { name, color }, size } = lang
  acc[name] = acc[name] ? { name, color, size: acc[name].size + size } : { name, color, size: size }

  return acc
}

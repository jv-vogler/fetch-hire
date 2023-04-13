import javascriptTechnologies from '@/technologies/javascript'
import phpTechnologies from '@/technologies/php'
import pythonTechnologies from '@/technologies/python'
import rubyTechnologies from '@/technologies/ruby'

export const parseJavascriptTechs = (packageJsonList: string[]) => {
  return parsePackageJsonList(packageJsonList)
}

export const parsePythonTechs = (requirementsTxtList: string[], environmentYmlList: string[]) => {
  const requirements = parseRequirementsTxtList(requirementsTxtList)
  const environments = parseEnvironmentYmlList(environmentYmlList)

  const technologiesCount = {} as Record<string, number>

  for (const key in requirements) {
    technologiesCount[key] = requirements[key] + (environments[key] || 0)
  }

  for (const key in environments) {
    if (!technologiesCount.hasOwnProperty(key)) technologiesCount[key] = environments[key]
  }

  return technologiesCount
}

export const parseRubyTechs = (gemfileList: string[]) => {
  return parseGemfileList(gemfileList)
}

export const parsePhpTechs = (composerJsonList: string[]) => {
  return parseComposerJsonList(composerJsonList)
}

const parsePackageJsonList = (packageJsonList: string[]) => {
  const technologiesCount = packageJsonList.reduce((acc, cur) => {
    const { dependencies, devDependencies } = JSON.parse(cur)
    const technologies = { ...dependencies, ...devDependencies }
    if (!technologies) return acc

    const techsArray = Object.keys(technologies)

    for (const tech of techsArray) {
      if (tech in javascriptTechnologies) acc[tech] ? (acc[tech] += 1) : (acc[tech] = 1)
    }

    return acc
  }, {} as Record<string, number>)

  return technologiesCount
}

const parseRequirementsTxtList = (requirementsTxtList: string[]) => {
  const packageNamePattern = /^([\w-]+)(?:[=<>!~]+\S+)?/gm

  const technologiesCount = requirementsTxtList.reduce((acc, cur) => {
    const techsArray: string[] = []
    let match: RegExpExecArray | null

    while ((match = packageNamePattern.exec(cur)) !== null) {
      const packageName = match[1]
      techsArray.push(packageName)
    }

    for (const tech of techsArray) {
      if (tech in pythonTechnologies) acc[tech] ? (acc[tech] += 1) : (acc[tech] = 1)
    }

    return acc
  }, {} as Record<string, number>)

  return technologiesCount
}

const parseEnvironmentYmlList = (environmentYmlList: string[]) => {
  const regexPattern = /^[\s-]*([\w.-]+)(?=\s|$)/gm

  const technologiesCount = environmentYmlList.reduce((acc, cur) => {
    const techsArray: string[] = []
    let match: RegExpExecArray | null

    while ((match = regexPattern.exec(cur)) !== null) {
      techsArray.push(match[1])
    }

    for (const tech of techsArray) {
      if (tech in pythonTechnologies) acc[tech] ? (acc[tech] += 1) : (acc[tech] = 1)
    }

    return acc
  }, {} as Record<string, number>)

  return technologiesCount
}

const parseGemfileList = (gemfileList: string[]) => {
  const gemPattern = /^[\s\t]*gem\s+'([\w-]+)'/gm

  const technologiesCount = gemfileList.reduce((acc, cur) => {
    const techsArray: string[] = []
    let match: RegExpExecArray | null

    while ((match = gemPattern.exec(cur)) !== null) {
      const packageName = match[1]
      techsArray.push(packageName)
    }

    for (const tech of techsArray) {
      if (tech in rubyTechnologies) acc[tech] ? (acc[tech] += 1) : (acc[tech] = 1)
    }

    return acc
  }, {} as Record<string, number>)

  return technologiesCount
}

const parseComposerJsonList = (composerJsonList: string[]) => {
  const technologiesCount = composerJsonList.reduce((acc, cur) => {
    const { require: dependencies, 'require-dev': devDependencies } = JSON.parse(cur)
    const technologies = { ...dependencies, ...devDependencies }
    if (!technologies) return acc

    const techsArray = Object.keys(technologies)

    for (const tech of techsArray) {
      if (tech in phpTechnologies) acc[tech] ? (acc[tech] += 1) : (acc[tech] = 1)
    }

    return acc
  }, {} as Record<string, number>)

  return technologiesCount
}

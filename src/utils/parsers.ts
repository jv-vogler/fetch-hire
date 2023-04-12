import javascriptTechnologies from '@/technologies/javascript'
import phpTechnologies from '@/technologies/php'
import pythonTechnologies from '@/technologies/python'
import rubyTechnologies from '@/technologies/ruby'

export const parsePackageJsonList = (content: string[]) => {
  const technologiesCount = content.reduce((acc, cur) => {
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

export const parseRequirementsList = (content: string[]) => {
  const packageNamePattern = /^([\w-]+)(?:[=<>!~]+\S+)?/gm

  const technologiesCount = content.reduce((acc, cur) => {
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

export const parseGemfileList = (content: string[]) => {
  const gemPattern = /^[\s\t]*gem\s+'([\w-]+)'/gm

  const technologiesCount = content.reduce((acc, cur) => {
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

export const parseComposerList = (content: string[]) => {
  const technologiesCount = content.reduce((acc, cur) => {
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

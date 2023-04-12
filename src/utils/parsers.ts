import javascriptTechnologies from '@/technologies/javascript'

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

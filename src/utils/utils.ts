function extractGitHubUsername(inputString: string): string {
  if (!inputString.includes('github.com')) return inputString

  const resultString = inputString.match(/(?<=github\.com\/)[^/]+/)
  if (resultString) {
    return resultString[0]
  } else {
    throw new Error('Invalid GitHub URL')
  }
}

export { extractGitHubUsername }

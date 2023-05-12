type Props = {
  languages?: {
    name: string
    color: string
    percentage: string
  }[]
}

const Languages = ({ languages }: Props) => {
  return (
    <>
      {languages
        ?.filter(lang => parseFloat(lang.percentage) >= 1.0)
        .map(lang => (
          <div key={lang.name}>
            <div>
              <h3>
                {lang.name} · {parseFloat(lang.percentage).toFixed(1)}%
              </h3>
              <div>
                <div
                  className="h-2 rounded-full"
                  style={{
                    backgroundColor: `${lang.color}`,
                    width: `${parseFloat(lang.percentage) * 0.7}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
export default Languages

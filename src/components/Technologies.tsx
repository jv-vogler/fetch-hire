import javascriptTechnologies from '@/technologies/javascript'
import phpTechnologies from '@/technologies/php'
import pythonTechnologies from '@/technologies/python'
import rubyTechnologies from '@/technologies/ruby'

type Props = {
  technologies?: {
    javascript: Record<string, number>
    python: Record<string, number>
    ruby: Record<string, number>
    php: Record<string, number>
  }
}

const Technologies = ({ technologies }: Props) => {
  const userJavascriptTechnologies = Object.entries(technologies?.javascript || {})
  const userPythonTechnologies = Object.entries(technologies?.python || {})
  const userRubyTechnologies = Object.entries(technologies?.ruby || {})
  const userPhpTechnologies = Object.entries(technologies?.php || {})

  return (
    <div className="flex flex-col gap-8">
      {userJavascriptTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-yellow-400">JavaScript</h1>
          <div className="grid gap-4">
            {userJavascriptTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit rounded-l-full bg-yellow-500 px-3 py-1 text-black">
                    {javascriptTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-black p-4 font-bold text-yellow-500">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {userPythonTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-blue-500">Python</h1>
          <div className="grid gap-4">
            {userPythonTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit rounded-l-full bg-blue-500 px-3 py-1 text-white">
                    {pythonTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-4 font-bold text-blue-500">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {userRubyTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-red-500">Ruby</h1>
          <div className="grid gap-4">
            {userRubyTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit rounded-l-full bg-red-800 px-3 py-1 text-white">
                    {rubyTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-4 font-bold text-red-800">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {userPhpTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[#777BB3]">PHP</h1>
          <div className="grid gap-4">
            {userPhpTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit rounded-l-full bg-[#777BB3] px-3 py-1 text-white">
                    {phpTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-4 font-bold text-[#777BB3]">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default Technologies

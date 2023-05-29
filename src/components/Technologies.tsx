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
    <div className="flex flex-wrap gap-6">
      {userJavascriptTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-yellow-300">JavaScript</h1>
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {userJavascriptTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit select-none rounded-l-full bg-yellow-500 px-2 text-gray-950">
                    {javascriptTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-fit items-center justify-center rounded-r-full bg-gray-950 px-1.5 py-3 font-bold text-yellow-500">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {userPythonTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-blue-400">Python</h1>
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {userPythonTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="z-10 w-fit select-none rounded-l-full bg-blue-500 px-2 text-white">
                    {pythonTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-3 font-bold text-blue-500">
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
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {userRubyTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="select-nonepx-2 z-10 w-fit rounded-l-full  bg-red-700 text-white">
                    {rubyTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-3 font-bold text-red-700">
                    {timesUsed}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {userPhpTechnologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-indigo-300">PHP</h1>
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {userPhpTechnologies
              .sort((a, b) => b[1] - a[1])
              .map(([tech, timesUsed]) => (
                <div key={tech} className="flex items-center">
                  <div className="bg-[#777BB3 select-none] z-10 w-fit rounded-l-full px-2 text-white">
                    {phpTechnologies[tech].name}
                  </div>
                  <p className="flex h-4 w-4 items-center justify-center rounded-r-full bg-zinc-200 p-3 font-bold text-[#777BB3]">
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

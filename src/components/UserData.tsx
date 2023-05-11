import { MdOutlinePeople } from 'react-icons/md'

import Image from 'next/image'

import { GithubData } from '@/types/GithubData'

type Props = {
  data?: GithubData
  languages?: {
    name: string
    color: string
    percentage: string
  }[]
  technologies?: {
    javascript: Record<string, number>
    python: Record<string, number>
    ruby: Record<string, number>
    php: Record<string, number>
  }
}

const UserData = ({ data, languages, technologies }: Props) => {
  return (
    <div className="container flex flex-col items-center gap-2">
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex w-full items-center gap-4 p-0">
            <Image
              src={data?.user.avatarUrl || ''}
              alt="avatar"
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-lg font-bold">{data?.user.name}</h1>
                <h2 className="-translate-y-1 text-sm text-zinc-400">
                  <span>{data?.user.login}</span>
                  {data?.user.pronouns && <span> · {data.user.pronouns}</span>}
                </h2>
              </div>
            </div>
          </div>
          <p className="p-2 text-sm">{data?.user.bio}</p>
        </div>
        <div>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <MdOutlinePeople fontSize={20} />{' '}
            <span className=" font-bold text-white">{data?.user.followers.totalCount}</span>{' '}
            followers ·{' '}
            <span className=" font-bold text-white">{data?.user.following.totalCount}</span>{' '}
            following
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserData

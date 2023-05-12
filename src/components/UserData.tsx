import { MdOutlinePeople } from 'react-icons/md'

import Image from 'next/image'

import { GithubData } from '@/types/GithubData'

import Languages from './Languages'
import SocialAccounts from './SocialAccounts'
import Technologies from './Technologies'

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
    <div className="flex flex-col gap-2 sm:w-96 sm:p-4">
      <div className="flex flex-col gap-4">
        <div>
          <a href={`https://github.com/${data?.user.login}`} target="_blank">
            <div className="flex items-center gap-4 p-0">
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
          </a>
          <p className="max-w-sm p-2 text-sm">{data?.user.bio}</p>
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

        <div className="flex gap-2">
          <SocialAccounts email={data?.user.email} links={data?.user.socialAccounts.nodes} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="mt-2 w-fit font-bold">
            Most used <span className="text-orange-400">languages</span> :
          </h2>
          <Languages languages={languages} />
        </div>
        <div>
          <h2 className="mb-2 mt-4 font-bold">
            Most used <span className="text-orange-400">technologies</span> :
          </h2>
          <Technologies technologies={technologies} />
        </div>
      </div>
    </div>
  )
}
export default UserData

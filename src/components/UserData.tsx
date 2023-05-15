import { AiFillCheckCircle } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import { HiOutlineLocationMarker, HiOutlineOfficeBuilding } from 'react-icons/hi'
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
          <div className="flex items-center gap-4">
            <a href={`https://github.com/${data?.user.login}`} target="_blank">
              <Image
                src={data?.user.avatarUrl || ''}
                alt="avatar"
                width={70}
                height={70}
                className="rounded-full"
              />
            </a>

            <div className="flex flex-col gap-2">
              <div>
                <a href={`https://github.com/${data?.user.login}`} target="_blank">
                  <h1 className="text-lg font-bold">{data?.user.name}</h1>
                </a>
                <h2 className="-translate-y-1 text-sm text-zinc-400">
                  <span>{data?.user.login}</span>
                  {data?.user.pronouns && <span> · {data.user.pronouns}</span>}
                </h2>
              </div>
            </div>
          </div>

          <p className="max-w-sm p-2 text-sm">{data?.user.bio}</p>

          <div>
            <div className="flex flex-col gap-1 text-xs text-zinc-400">
              <div className="flex items-center gap-1">
                <MdOutlinePeople fontSize={20} className="-translate-y-0.5" />{' '}
                <span className="font-bold text-white">{data?.user.followers.totalCount}</span>
                followers ·
                <span className="font-bold text-white">{data?.user.following.totalCount}</span>
                following
              </div>
              {data?.user.company && (
                <div className="flex items-center gap-1">
                  <HiOutlineOfficeBuilding fontSize={18} className="text-zinc-400" />
                  <p className="text-sm text-zinc-300">{data.user.company}</p>
                </div>
              )}
              {data?.user.location && (
                <div className="flex items-center gap-1 text-zinc-300">
                  <HiOutlineLocationMarker fontSize={18} className="text-zinc-400" />
                  <p className="text-sm">{data?.user.location}</p>
                </div>
              )}
              {data?.user.websiteUrl && (
                <div className="flex items-center gap-1">
                  <AiOutlineLink fontSize={18} className="cursor-pointer text-zinc-400" />
                  <a className="text-zinc-300" href={data.user.websiteUrl} target="_blank">
                    {data.user.websiteUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {data?.user.email && data.user.socialAccounts.nodes && (
          <div className="flex gap-2">
            <SocialAccounts email={data?.user.email} links={data?.user.socialAccounts.nodes} />
          </div>
        )}

        <div>
          {data?.user.isHireable && (
            <div className="flex items-center gap-1 font-bold text-green-500">
              <p>Hireable</p> <AiFillCheckCircle fontSize={20} />
            </div>
          )}
        </div>

        <hr className="bottom-2 border-zinc-500" />

        <div>
          {data?.user.name} has{' '}
          <span className="font-bold text-orange-400">{data?.user.repositories.totalCount}</span>{' '}
          public repositories.
        </div>

        {data?.user.repositories.totalCount !== 0 && (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}
export default UserData

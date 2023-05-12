import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineLink,
  AiOutlineMail,
} from 'react-icons/ai'

type Props = {
  email?: string | null
  links?: {
    url: string
    provider: string
  }[]
}

const SocialAccounts = ({ email, links }: Props) => {
  return (
    <>
      {email && (
        <a href={`mailto:${email}`}>
          <AiOutlineMail
            fontSize={30}
            className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
          />
        </a>
      )}
      {links?.map(link => {
        switch (link.provider) {
          case 'LINKEDIN':
            return (
              <a href={link.url} target="_blank">
                <AiFillLinkedin
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          case 'FACEBOOK':
            return (
              <a href={link.url} target="_blank">
                <AiFillFacebook
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          case 'INSTAGRAM':
            return (
              <a href={link.url} target="_blank">
                <AiFillInstagram
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          case 'TWITTER':
            return (
              <a href={link.url} target="_blank">
                <AiFillTwitterSquare
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          case 'YOUTUBE':
            return (
              <a href={link.url} target="_blank">
                <AiFillYoutube
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          case 'GENERIC':
            return (
              <a href={link.url} target="_blank">
                <AiOutlineLink
                  fontSize={30}
                  className="cursor-pointer text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
                />
              </a>
            )
          default:
            return
        }
      })}
    </>
  )
}
export default SocialAccounts

import { useTranslation } from 'react-i18next'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto flex justify-center border-t border-zinc-600 p-4">
      <div className="flex items-center gap-2">
        {t('Made by')}{' '}
        <a
          href="https://github.com/jv-vogler"
          target="_blank"
          className="border-b-2 font-bold transition-all duration-300 hover:border-orange-400 hover:text-orange-400"
        >
          JV
        </a>{' '}
        ·{' '}
        <a
          href="https://github.com/jv-vogler/fetch-hire"
          target="_blank"
          className="transition-all duration-300 hover:text-orange-400"
        >
          <AiFillGithub fontSize={30} />
        </a>
      </div>
    </footer>
  )
}
export default Footer

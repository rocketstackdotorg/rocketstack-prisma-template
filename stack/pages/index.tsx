import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import i18next from 'i18next'
import Home from '../components/Home'

const LanguageRouter: React.FC = () => {
  const { push, pathname } = useRouter()

  useEffect(() => {
    // if (pathname === '/' && i18next.language != null) {
    //   push('/' + i18next.language.slice(0, 2)).catch(() => null)
    // }
    if (pathname === '/') {
      void push('/en', undefined, { shallow: true })
    }
  }, [pathname, push])

  return <Home />
}

export default LanguageRouter

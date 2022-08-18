import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Home from '../../components/Home'
import languages from '../../assets/locales/languages.json'
import { Language } from '../../types'

const HomeRouter: React.FC = () => {
  const { push, asPath } = useRouter()

  // Remove when locales are fixed:
  useEffect(() => {
    if (asPath !== '/en') {
      void push('/en', undefined, { shallow: true })
    }
  }, [asPath, push])

  return <Home />
}

export default HomeRouter

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    lang: params?.lang as string
  }
})

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: languages.map((lang: Language) => ({
    params: { lang: lang.language.toLowerCase() }
  })),
  fallback: false
})

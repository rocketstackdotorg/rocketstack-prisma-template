import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import '@code-hike/mdx/dist/index.css'

import { initI18n, changeLanguage } from '../lib/i18n'
import { AnalyticsProvider } from '../lib/analytics'
import Seo from '../components/Seo'
import Theme from '../components/Theme'
import QueryListener from '../components/QueryListener'
import { SnackbarProvider } from 'notistack'
import { RecoilRoot } from 'recoil'
import { Seo as SeoType } from '../types'

export interface PageProps {
  lang?: string
  seo?: unknown
}

export const I18nProvider: React.FC<{ lang: string }> = ({
  children,
  lang
}) => {
  const [i18nInitiated, setI18nInitiated] = useState(false)

  if (i18nInitiated && lang != null && typeof lang === 'string') {
    changeLanguage(lang.slice(0, 2))
  }

  useEffect(() => {
    initI18n()
    setI18nInitiated(true)
  }, [])

  return i18nInitiated ? <>{children}</> : null
}

const App: React.FC<AppProps<PageProps>> = ({ Component, pageProps }) => (
  <AppWrapper {...pageProps}>
    <I18nProvider lang={pageProps.lang}>
      <QueryListener lang={pageProps.lang}>
        <Component {...pageProps} />
      </QueryListener>
    </I18nProvider>
  </AppWrapper>
)

export default App

export const AppWrapper: React.FC<{ seo?: SeoType }> = ({ seo, children }) => (
  <>
    {/* <Head /> */}
    <Seo seo={seo} />
    <RecoilRoot>
      <AnalyticsProvider>
        <SessionProvider>
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Theme>
             {children}
            </Theme>
          </SnackbarProvider>
        </SessionProvider>
      </AnalyticsProvider>
    </RecoilRoot>
  </>
)

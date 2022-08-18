import i18next, { InitOptions } from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import resources from '../assets/locales/locales.json'

export const LANGUAGES_CACHE_PATH = 'languages.json'
export const LOCALES_CACHE_PATH = 'locales.json'
export const TRANSLATION_KEYS_CACHE_PATH = 'translationKeys.json'

export const defaultLanguage = 'en'

export const i18nOptions: InitOptions = {
  fallbackLng: defaultLanguage,
  resources,
  ns: ['translations'],
  defaultNS: 'translations',
  nsSeparator: false,
  returnObjects: true,
  debug: false,
  interpolation: {
    escapeValue: false
  }
  // detection: {
  //   order: [
  //     'cookie',
  //     'localStorage',
  //     'sessionStorage',
  //     'navigator',
  //     'htmlTag',
  //     'path',
  //     'subdomain'
  //   ],
  //   lookupCookie: 'lng',
  //   lookupLocalStorage: 'lng',
  //   lookupFromPathIndex: 0,
  //   lookupFromSubdomainIndex: 0,
  //   caches: ['localStorage', 'cookie'],
  //   excludeCacheFor: ['cimode'],
  //   cookieOptions: { path: '/', sameSite: 'strict' }
  // }
}

export const initI18n: () => void = () => {
  void i18next
    // .use(LanguageDetector)
    .init(i18nOptions)
    .catch(console.warn)
}

export const changeLanguage: (l: string) => void = language => {
  void i18next.changeLanguage(language)
}

export const t: TFunction = (key, interpolation) => {
  // const translationKeysCache: string[] = translationKeys || getTranslationKeys()
  // if (!translationKeysCache.includes(key)) {
  //   fetch('/api/i18n', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(key)
  //   })
  //   return
  // }
  return i18next.t(key, interpolation ?? {})
}

export type TFunction = (key: string, interpolation?: Record<string, string>) => string

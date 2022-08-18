import {
  MatomoProvider,
  createInstance,
  useMatomo
} from '@datapunt/matomo-tracker-react'

const instance = createInstance({
  urlBase: process.env.NEXT_PUBLIC_ANALYTICS_HOST ?? '/',
  siteId: parseInt(process.env.NEXT_PUBLIC_ANALYTICS_SITE_ID ?? '1')
})

export const AnalyticsProvider: React.FC = props => (
  <MatomoProvider {...props} value={instance} />
)

export const useAnalytics = useMatomo

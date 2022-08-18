import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useAnalytics } from '../lib/analytics'
import { t } from '../lib/i18n'

const QueryListener: ({
  children,
  lang
}: QueryListenerProps) => JSX.Element = ({ children, lang }) => {
  const { data: session } = useSession()
  const { asPath, push, query } = useRouter()

  const { enqueueSnackbar } = useSnackbar()
  const { trackPageView } = useAnalytics()

  useEffect(() => { trackPageView({}) }, [asPath, trackPageView])

  useEffect(() => {
    const initQueryListener: () => Promise<void> = async () => {
      if (
        session?.user?.id != null &&
        (query.confirmEmail === 'true' ||
          query.success === 'true' ||
          query.created === 'true')
      ) {
        await push(asPath.split('?')[0], undefined, { shallow: true })
        enqueueSnackbar(
          t(
            query.created === 'true'
              ? 'Your account has been successfully created.'
              : 'You have successfully signed in'
          ),
          {
            variant: 'success',
            id: 'signin-success'
          }
        )
      }
    }
    void initQueryListener()
  }, [asPath, enqueueSnackbar, push, query, session?.user?.id])

  return children
}

export default QueryListener

interface QueryListenerProps {
  children: JSX.Element
  lang: string
}

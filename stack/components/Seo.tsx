import Head from 'next/head'
import { t } from '../lib/i18n'

const Seo: React.FC<SeoProps> = ({ seo }) => {
  const { title, metaDesc, canonicalUrl } = seo ?? defaultSeo

  return (
    <Head>
      {/* Main */}
      <title>{t(title)}</title>
      <meta name='description' content={t(metaDesc)} />
      <link
        rel='canonical'
        href={`${process.env.NEXT_PUBLIC_HOST_URL ?? ''}${canonicalUrl}`}
      />
      {/* Facebook */}
      <meta
        property='og:site_name'
        content={process.env.NEXT_PUBLIC_HOST_URL}
      />
      <meta property='og:local' content='en_EN' />
      <meta property='og:title' content={t(title)} />
      <meta property='og:description' content={t(metaDesc)} />
    </Head>
  )
}

export default Seo

export const defaultSeo = {
  title: String(process.env.NEXT_PUBLIC_HOST_NAME),
  canonicalUrl: String(process.env.NEXT_PUBLIC_HOST_URL),
  metaDesc: String(process.env.NEXT_PUBLIC_TAGLINE)
}

interface SeoProps {
  seo?: {
    title: string
    metaDesc: string
    canonicalUrl: string
  }
}

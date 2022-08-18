import path from 'path'
import { GetStaticPaths, GetStaticProps } from 'next'
import { renderToString } from 'react-dom/server'

import Docs from '../../../components/Docs'
import { makeFileTreeFromPaths, walkPath } from '../../../lib/utils'
import { DAppProviders, withDAppProvider } from '../../../lib/dapp'
import languages from '../../../assets/locales/languages.json'
import { Language } from '../../../types'
import { getHeadingsFromHtml } from '../../../lib/mdx'
import { AppWrapper } from '../../_app'

export const DOCS_PATH = path.join(process.cwd(), '/assets/docs')

const getDocsPaths: () => string[] = () =>
  walkPath(DOCS_PATH).map((path) => path.replace(DOCS_PATH, ''))

export default withDAppProvider(Docs as React.FC<unknown>)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = (params?.path as string[])?.reduce((pv, cv) => pv + '/' + cv, '') ?? '/index'
  const fileUrl = url + '.mdx'
  const indexFileUrl = url + '/index.mdx'
  let Doc
  let isIndex = false

  if (params?.path != null) {
    try {
      Doc = await import(`../../../assets/docs${fileUrl}`)
    } catch (e) {}
    if (Doc?.metadata == null) {
      try {
        Doc = await import(`../../../assets/docs${indexFileUrl}`)
        isIndex = true
      } catch (e) {}
    }
  }

  let headings = null
  if (Doc?.default != null) {
    const contentString = renderToString(
    <AppWrapper>
      <DAppProviders>
        <Doc.default />
      </DAppProviders>
    </AppWrapper>
    )
    headings = getHeadingsFromHtml(contentString)
  }
  return {
    props: {
      lang: params?.lang as string,
      trees: await makeFileTreeFromPaths(getDocsPaths()),
      url: isIndex ? indexFileUrl : fileUrl,
      metadata: Doc?.metadata ?? null,
      headings
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docsFilePaths = getDocsPaths().map((path) =>
    path
      .replace(/\.mdx$/, '')
      .replace(/\/index$/, '')
      .split('/')
      .filter((slash: string) => slash !== '')
  )
  // If no asset/docs/index.mdx exists, this will still allow redirections (instead of 404):
  docsFilePaths.push([])
  //
  return {
    paths: languages
      .map((lang: Language) =>
        docsFilePaths.map(path => ({
          params: { lang: lang.language.toLowerCase(), path }
        }))
      )
      .flat(),
    fallback: false
  }
}

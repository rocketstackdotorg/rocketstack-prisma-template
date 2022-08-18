import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import Sidebar from './Sidebar'
import TOC, { Heading as HeadingType } from './TableOfContents'
import DocsNavigation from './Navigation'
import Nav from '../Home/Nav'
import Loader from '../Loader'
import { useBreakpoint } from '../../lib/utils'
import { DocsMetadata, FileTree } from '../../types'
import { findPostByOrder, overwrittenMDXComponents } from '../../lib/mdx'

const Docs: React.FC<{
  trees: FileTree[]
  url: string
  metadata: DocsMetadata
  headings: HeadingType[] | null
}> = ({ trees, metadata, url, headings }) => {
  const { query, push } = useRouter()
  const isTabletOrAbove = useBreakpoint('sm')
  const isNotebookOrAbove = useBreakpoint('md')
  const [sidebarOpen, setSidebarOpen] = useState(isNotebookOrAbove)
  const currentTree = findPostByOrder(trees, metadata?.order)
  const MDXComponent = dynamic<{
    components: Record<string, React.FC<unknown>>
  }>(async () => await import(`../../assets/docs${url}`), { ssr: false, loading: () => <Loader /> })

  useEffect(() => { setSidebarOpen(isNotebookOrAbove) }, [isNotebookOrAbove])

  useEffect(() => {
    if (query.path == null) void push(`/${i18next.language}/docs/introduction`)
  }, [push, query.path])

  return (
    <>
      <Container disableGutters maxWidth={false}>
        <Nav />
      </Container>
      <Grid container sx={{ overflow: 'hidden' }} height="calc(100vh - 100px)">
        <Sidebar trees={trees} open={sidebarOpen} setOpen={setSidebarOpen} />
        <Grid
          item
          sx={{
            overflow: 'scroll',
            height: '100%',
            px: 6,
            width: `calc(100% - ${sidebarOpen ? '250px' : '0px'} - ${isTabletOrAbove ? '250px' : 0})`,
            ml: sidebarOpen ? '250px' : 0
          }}
        >
          <MDXComponent components={overwrittenMDXComponents} />
          <DocsNavigation trees={trees} current={currentTree as FileTree} />
        </Grid>
        {headings != null && <TOC headings={headings} />}
      </Grid>
    </>
  )
}

export default Docs

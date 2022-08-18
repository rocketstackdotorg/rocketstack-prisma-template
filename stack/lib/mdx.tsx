import Typography from '@mui/material/Typography'

import { Heading } from '../components/Docs/TableOfContents'
import { FileTree } from '../types'

export const findPostByOrder: (
  trees: FileTree[],
  order: number
) => FileTree | undefined = (trees, order) => {
  let post
  trees.forEach((tree) => {
    if (tree.metadata?.order === order) {
      post = tree
    } else if (tree.children != null) {
      const _post = findPostByOrder(tree.children, order)
      if (_post != null) post = _post
    }
  })
  return post
}

export const slugify: (text: string) => string = text => text.replace(/ /g, '_').toLowerCase()

export const getHeadingsFromHtml: (stringifiedHtml: string) => Heading[] = (stringifiedHtml) => {
  const regex = /<h[2-6]>(.*?)<\/h[2-6]>/g
  if (stringifiedHtml.match(regex) != null) {
    return (
      stringifiedHtml.match(regex)?.map((heading) => {
        const type = parseInt(
          heading.match(/<h[1-6]>/)?.[0]?.slice(2, -1) ?? ''
        )
        const headingText = heading
          .replace(/<h[2-6]>/, '')
          .replace(/<\/h[2-6]>/, '')
        const link = `#${slugify(headingText)}`
        return { text: headingText, link, type }
      }) ?? []
    )
  }
  return []
}

const getMarkdownHeaderComponent: (headingType: number) => React.FC =
  (headingType) =>
    ({ children }) => {
      const idText = slugify(children as string)
      const HeadingComponent: React.FC = () => (
      <Typography variant={`h${headingType}` as 'h1'} id={idText}>
        {children}
      </Typography>
      )
      return HeadingComponent({})
    }

export const overwrittenMDXComponents = {
  h1: getMarkdownHeaderComponent(1),
  h2: getMarkdownHeaderComponent(2),
  h3: getMarkdownHeaderComponent(3),
  h4: getMarkdownHeaderComponent(4),
  h5: getMarkdownHeaderComponent(5),
  h6: getMarkdownHeaderComponent(6)
}

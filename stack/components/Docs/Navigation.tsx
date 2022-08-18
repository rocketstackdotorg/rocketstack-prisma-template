import { useRouter } from 'next/router'
import i18next from 'i18next'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit'

import Link from '../Link'
import { t } from '../../lib/i18n'
import { FileTree } from '../../types'

const DocsNavigation: React.FC<{ trees: FileTree[], current: FileTree }> = ({
  trees,
  current
}) => {
  const { push } = useRouter()
  const orderedTrees = orderTrees(trees)
  const previous = orderedTrees[orderedTrees.indexOf(current) - 1]
  const next = orderedTrees[orderedTrees.indexOf(current) + 1]

  return (
    <>
      <Link href="/" target="_blank">
        <Grid container mt={5} mb={4}>
          <EditIcon style={{ marginRight: '8px' }} />
          <Typography>{t('Edit this page')}</Typography>
        </Grid>
      </Link>
      <Grid container justifyContent="space-between" my={3}>
        <Grid item xs={5.9}>
          {previous != null && (
            <Button
              onClick={() => {
                void push(
                  `/${i18next.language}/docs/${
                    (previous?.path?.endsWith('index.mdx') === true
                      ? previous?.path?.slice(1, -9)
                      : previous?.path?.slice(1, -4)) as string
                  }`
                )
              }}
              variant="outlined"
              fullWidth
              sx={{ borderRadius: '8px' }}
            >
              <Grid container flexDirection="column" alignItems="flex-start">
                <Grid item>{t('Previous')}</Grid>
                <Grid item>
                  {'<<'} {previous?.metadata?.title}
                </Grid>
              </Grid>
            </Button>
          )}
        </Grid>
        <Grid item xs={5.9}>
          {next != null && (
            <Button
              onClick={() => {
                void push(
                  `/${i18next.language}/docs/${
                    (next?.path?.endsWith('index.mdx') === true
                      ? next?.path?.slice(1, -9)
                      : next?.path?.slice(1, -4)) as string
                  }`
                )
              }}
              variant="outlined"
              fullWidth
              sx={{ borderRadius: '8px' }}
            >
              <Grid container flexDirection="column" alignItems="flex-end">
                <Grid item>{t('Next')}</Grid>
                <Grid item>
                  {next?.metadata?.title} {'>>'}
                </Grid>
              </Grid>
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default DocsNavigation

const orderTrees: (trees: FileTree[]) => FileTree[] = (trees) => {
  const orderedList: FileTree[] = []
  trees
    .sort((a, b) =>
      (a.metadata?.order ?? 0) < (b.metadata?.order ?? 0) ? -1 : 1
    )
    .forEach((tree) => {
      if (tree.metadata != null && tree.metadata.title !== '') {
        orderedList.push(tree)
        if (tree.children != null) {
          orderedList.push(...orderTrees(tree.children))
        }
      }
    })
  return orderedList.filter((tree, i, arr) => arr[i - 1]?.path !== tree.path)
}

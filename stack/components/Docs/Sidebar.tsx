import { useRouter } from 'next/router'
import i18next from 'i18next'
import Drawer from '@mui/material/Drawer'
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SidebarIcon from '../../assets/svg/sidebar.svg'

import { FileTree } from '../../types'
import { useBreakpoint } from '../../lib/utils'

const DocsSidebar: React.FC<{
  trees: FileTree[]
  open: boolean
  setOpen: (value: boolean) => void
}> = ({ trees, open, setOpen }) => {
  const isTabletOrAbove = useBreakpoint('sm')
  return (
    <>
      <Drawer
        open={open}
        variant="persistent"
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '250px' },
            height: 'calc(100vh - 100px)',
            mt: '100px',
            borderColor: 'grey.900'
          }
        }}
      >
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={getTreeIds(trees)}
        >
          {trees
            .sort((a, b) =>
              (a.metadata?.order as number) > (b.metadata?.order as number)
                ? 1
                : -1
            )
            .map((tree) => getTreeItemsFromFileTree(tree))}
        </TreeView>
      </Drawer>
      <Button
        variant="outlined"
        sx={{
          '&:hover': {
            backgroundColor: 'background.default'
          },
          backgroundColor: 'background.default',
          borderColor: { xs: 'grey.dark', sm: 'grey.500' },
          transition: 'left 0.2s',
          position: 'fixed',
          minWidth: 0,
          width: 40,
          height: 40,
          pl: 0,
          pr: 0,
          bottom: { xs: 22, sm: 62 },
          left: { xs: open ? 'calc(50% - 20px)' : 50, sm: open ? 230 : 50 },
          zIndex: 1300
        }}
        onClick={() => setOpen(!open)}
      >
        <Box mt={0.5}>
          {open ? (
            !isTabletOrAbove ? (
              <CloseIcon sx={{ color: 'grey.main' }} />
            ) : (
              <SidebarIcon
                style={{
                  transform: open ? '' : 'rotate(180deg)',
                  transition: 'transform 0.2s'
                }}
              />
            )
          ) : (
            <SidebarIcon
              style={{
                transform: open ? '' : 'rotate(180deg)',
                transition: 'transform 0.2s'
              }}
            />
          )}
        </Box>
      </Button>
    </>
  )
}

export default DocsSidebar

const getTreeItemsFromFileTree: (tree: FileTree) => JSX.Element = (tree) => (
  <TreeItemFromFileTree tree={tree}>
    {tree.children
      ?.sort((a, b) =>
        (a.metadata?.order as number) > (b.metadata?.order as number) ? 1 : -1
      )
      ?.map((child) => getTreeItemsFromFileTree(child))}
  </TreeItemFromFileTree>
)

const getTreeIds: (trees: FileTree[]) => string[] = (trees) => {
  const arr: string[] = []
  trees.forEach((tree) => {
    const decimals = tree.metadata?.order?.toString()?.replace('.', '')?.length
    if (decimals != null && decimals < 3) {
      arr.push(tree.path as string)
      if (tree.children != null) {
        arr.push(...getTreeIds(tree.children))
      }
    }
  })
  return arr
}

const TreeItemFromFileTree: React.FC<{ tree: FileTree }> = ({
  tree,
  children
}) => {
  const { push } = useRouter()
  return (
    <StyledLink
      key={(tree.path as string) + (tree.children != null ? '' : '-node')}
      nodeId={(tree.path as string) + (tree.children != null ? '' : '-node')}
      label={
        tree.children == null
          ? tree.metadata?.title ?? tree.text
          : tree.children.find((child) => child.metadata?.folderName != null)
            ?.metadata?.folderName
      }
      onClick={() => {
        if (tree.children == null) {
          void push(
            `/${i18next.language}/docs/${
              (tree.path?.endsWith('index.mdx') === true
                ? tree.path?.slice(1, -9)
                : tree.path?.slice(1, -4)) as string
            }`
          )
        }
      }}
    >
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(TreeItem)`
  && {
    .MuiTreeItem-label {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    margin-top: 10px;
  }
`

import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import Link from '../components/Link'
import { t } from '../lib/i18n'
import { useSetModal } from '../lib/modal'

export const NotFound: React.FC = () => {
  const setModal = useSetModal()
  useEffect(() => setModal(null), [setModal])
  return (
    <Grid
      container
      height='calc(100vh - 100px)'
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <div>404 :/</div>
      <div>
        {t(
          "This page does not exist, or you don't have the permissions to view it."
        )}
      </div>
      <Link href='/'>
        <Button variant='contained' sx={{ mt: 3 }}>
          {t('Take me back home')}
        </Button>
      </Link>
    </Grid>
  )
}

export default NotFound

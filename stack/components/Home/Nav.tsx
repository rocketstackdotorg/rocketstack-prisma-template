import { useState } from 'react'
import LanguageMenu from '../LanguageMenu'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '../Link'

export const navHeight = '100px'

const Nav: React.FC = () => {
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <Box
      sx={{
        top: 0,
        transition: 'background 0.3s linear',
        zIndex: 1000
      }}
    >
      <Grid
        container
        sx={{
          paddingTop: '24px',
          paddingBottom: '24px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link href='/'>
          <Button
            id='home-nav-button'
            // onClick={() => (setIsOpen != null ? setIsOpen(false) : {})}
            variant='text'
            sx={{
              width: {
                xs: '100%',
                md: 'auto'
              },
              textAlign: { xs: 'center', md: 'left' },
              letterSpacing: '0.1em'
            }}
          >
            <Typography variant='h4'>
              {process.env.NEXT_PUBLIC_HOST_NAME?.toLowerCase()}
            </Typography>
            {/* <div style={{ fontSize: '14px', margin: '-8px 0 0 4px' }}>™</div> */}
          </Button>
        </Link>
        <div>
          <LanguageMenu open={languageOpen} setOpen={setLanguageOpen} />
        </div>
      </Grid>
    </Box>
  )
}

export default Nav

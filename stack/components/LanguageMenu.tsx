import { useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import i18next from 'i18next'
import languages from '../assets/locales/languages.json'
import { countryToFlag } from '../lib/countries'

const LanguageMenu: React.FC<LanguageMenuProps> = ({ open, setOpen }) => {
  const router = useRouter()
  const { asPath } = router
  const ref = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [asPath])

  const handleClickAway: (_: MouseEvent) => void = event => {
    const target = event.target as HTMLElement
    if (target.id !== 'menu') {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickAway)
    return () => window.removeEventListener('click', handleClickAway)
  })

  return (
    <>
      <Button
        sx={{ mx: 2 }}
        id='menu'
        variant='text'
        onClick={() => setOpen(true)}
      >
        <div id='menu' ref={ref}>
          <Typography id='menu' fontSize='20px'>
            {countryToFlag(localeNameToIsoCode(i18next.language?.slice(0, 2)))}
          </Typography>
        </div>
      </Button>
      <Menu open={open} onClose={() => setOpen(false)} anchorEl={ref.current}>
        <Grid container flexDirection='column' alignItems='flex-start' px={2}>
          {languages.map((lang: any, index: number) => (
            <Button
              variant='text'
              sx={{ mt: 1, fontSize: '20px' }}
              onClick={() => {
                void router.push(
                  asPath.replace(
                    i18next.language?.slice(0, 2),
                    lang.language.toLowerCase()
                  )
                )
              }}
              startIcon={countryToFlag(localeNameToIsoCode(lang.language))}
              key={index}
            >
              {lang.name}
            </Button>
          ))}
        </Grid>
      </Menu>
    </>
  )
}

export default LanguageMenu

interface LanguageMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const localeNameToIsoCode: (_: string) => string = localeName => {
  let isoCode = localeName?.toUpperCase()
  switch (localeName?.toUpperCase()) {
    case 'CS':
      isoCode = 'CZ'
      break
    case 'DA':
      isoCode = 'DK'
      break
    case 'EL':
      isoCode = 'GR'
      break
    case 'EN':
      isoCode = 'GB'
      break
    case 'JA':
      isoCode = 'JP'
      break
    case 'ZH':
      isoCode = 'CN'
      break
    case 'ET':
      isoCode = 'EE'
      break
    case 'SV':
      isoCode = 'SE'
  }
  return isoCode
}

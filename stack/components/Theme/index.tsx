import React, { useEffect } from 'react'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import MuiModal from '@mui/material/Modal'
import { SetterOrUpdater, useRecoilState } from 'recoil'

import { palette } from './palette'
import { components } from './components'
import { typography } from './typography'
import { modalState } from '../../lib/modal'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const theme = createTheme({
  palette,
  components,
  shape: {
    borderRadius: 16
  },
  typography
} as ThemeOptions)

export interface ModalState {
  modal: React.ReactNode | null
  setModal: SetterOrUpdater<JSX.Element | null>
}

const ModalContext = React.createContext<ModalState>({
  modal: null,
  setModal: (_) => undefined
})

export const Modal: React.FC<ModalState> = ({ modal, setModal }) => {
  useEffect(() => {
    const handleClickAway: (event: MouseEvent) => void = event => {
      const target = event.target as HTMLElement
      if (target?.id === 'backdrop') {
        setModal(null)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleClickAway)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', handleClickAway)
      }
    }
  }, [setModal])
  return (
  <MuiModal open={modal != null} onClose={() => setModal(null)}>
    <Grid
      container
      id='backdrop'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      overflow='scroll'
      py={4}
      px={2}
      zIndex='-1'
    >
      {modal ?? <></>}
    </Grid>
  </MuiModal>
  )
}

export const ModalProvider: React.FC = (props) => {
  const [modal, setModal] = useRecoilState(modalState)
  return (
    <ModalContext.Provider {...props} value={{
      modal,
      setModal
    }}>
      {props.children}
      <Modal {...{ modal, setModal }} />
    </ModalContext.Provider>
  )
}

export const withModalProvider = (Component: React.FC<Record<string, unknown>>): React.FC => {
  return function ModalProviderWrapper (props) {
    return (
      <ModalProvider>
        <Component {...props} />
      </ModalProvider>
    )
  }
}

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export const withTheme = (Component: React.FC): React.FC => {
  return function ThemeWrapper (props) {
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    )
  }
}

export default Theme

import { palette } from '../palette'

export const MuiCard = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        cursor: 'pointer'
      },
      background: palette.background.secondary
    }
  }
}

import { palette } from '../palette'

export const MuiButton = {
  styleOverrides: {
    root: {
      color: palette.text.primary,
      boxShadow: 'none',
      borderRadius: '60px',
      padding: '10px 30px'
    },
    contained: {
      color: palette.background.default
    },
    containedPrimary: {
      background: palette.blueGradient.main,
      color: palette.background.default
    },
    containedSecondary: {
      background: palette.redGradient.main,
      color: palette.background.default
    },
    outlined: {
      border: `1px solid ${palette.text.primary}`
    },
    textPrimary: {
      '&:hover': { color: palette.primary.main }
    },
    textSecondary: {
      '&:hover': { color: palette.brickRed.main }
    },
    text: {
      padding: 0,
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 0,
      textTransform: 'none',
      textAlign: 'left',
      '&:hover': {
        background: 'transparent'
      }
    }
  }
}

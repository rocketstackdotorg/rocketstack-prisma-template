import { palette } from '../palette'

export const MuiSpeedDial = {
  styleOverrides: {
    fab: {
      color: palette.background.default,
      '&:hover': {
        backgroundColor: palette.text.primary,
        color: palette.background.default
      }
    }
  }
}

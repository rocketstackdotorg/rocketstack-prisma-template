import { palette } from '../palette'

export const MuiTextField = {
  defaultProps: {
    variant: 'standard',
    InputLabelProps: {
      disableAnimation: true,
      shrink: true
    }
  },
  styleOverrides: {
    root: {
      '.MuiOutlinedInput-root': {
        background: palette.background.default
      }
    }
  }
}

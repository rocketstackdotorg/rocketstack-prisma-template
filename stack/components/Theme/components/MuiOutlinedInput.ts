import { palette } from '../palette'

export const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      borderRadius: '4px'
    },
    input: {
      '&.MuiNativeSelect-select': {
        borderRadius: '4px',
        background: palette.background.default
      }
    }
  }
}

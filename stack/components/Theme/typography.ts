import { palette } from './palette'

export const typography = {
  color: palette.text.primary,
  fontFamily: 'FuturaPT',
  letterSpacing: '0.04em',
  lineHeight: '1.3em',
  h2: {
    fontSize: '33px',
    fontWeight: 600
  },
  h3: {
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: '1.3em'
  },
  h4: {
    fontSize: '25px'
  },
  h5: {
    fontSize: '19px',
    fontWeight: 600
  },
  h6: {
    fontSize: '16px',
    fontWeight: 600
  },
  subtitle1: {
    fontSize: '1vw',
    fontWeight: 600,
    lineHeight: '25px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: palette.primary.main
  },
  button: {
    textTransform: 'none'
  }
}

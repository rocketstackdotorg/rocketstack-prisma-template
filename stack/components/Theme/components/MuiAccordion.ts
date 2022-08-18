export const MuiAccordion = {
  styleOverrides: {
    root: {
      '&.Mui-expanded': { margin: '0px' },
      borderTop: 'solid 1px',
      borderBottom: 'solid 1px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      ':before': {
        backgroundColor: '#fff'
      }
    }
  }
}

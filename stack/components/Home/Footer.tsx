import Grid from '@mui/material/Grid'

const Footer: React.FC = () => (
  <Grid
    container
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    marginBottom={{ xs: 8, lg: 10 }}
  >
    <div>{process.env.NEXT_PUBLIC_COMPANY_NAME}</div>
    <div>© 2022</div>
  </Grid>
)

export default Footer

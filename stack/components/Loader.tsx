import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

const Loader: React.FC = () => (
  <Grid container justifyContent='center' alignItems='center' height='calc(100vh - 100px)'>
    <CircularProgress sx={{ color: 'text.primary' }} />
  </Grid>
)

export default Loader

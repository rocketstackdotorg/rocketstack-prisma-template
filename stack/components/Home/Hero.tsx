import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { navHeight } from './Nav'
import { t } from '../../lib/i18n'

const Hero: React.FC = () => (
  <Grid
    container
    minHeight='100vh'
    alignItems='center'
    justifyContent='center'
    marginTop={{ xs: 4, md: `-${navHeight}` }}
    marginBottom={{ xs: 18, md: 0 }}
  >
    <Grid item xs={12} md={6}>
      <Typography width='100%' variant='h2'>
        {t(String(process.env.NEXT_PUBLIC_TAGLINE))}
      </Typography>
      <br />
      <br />
      <Typography width='100%' variant='h4'>
        {t(
          'Built with Nextjs and simplicity in mind.'
        )}
      </Typography>
    </Grid>
  </Grid>
)

export default Hero

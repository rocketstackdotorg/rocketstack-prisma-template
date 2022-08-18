import Nav from './Nav'
import Hero from './Hero'
import Container from '@mui/material/Container'
import Footer from './Footer'

const Home: React.FC = () => (
  <Container disableGutters maxWidth={false}>
    <Nav />
    <Hero />
    <Footer />
  </Container>
)

export default Home

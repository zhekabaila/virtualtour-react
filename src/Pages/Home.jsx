import Tour from '../components/sections/Tour'
import Hero from '../components/sections/Hero'
import Container from '../components/Container'
import About from '../components/sections/About'
import Places from '../components/sections/Places'
import Technology from '../components/sections/Technology'

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Technology />
      <Places />
      <Tour />
    </Container>
  )
}

export default Home

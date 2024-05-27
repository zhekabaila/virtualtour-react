import Tour from '../Components/sections/Tour'
import Hero from '../Components/sections/Hero'
import Container from '../Components/Container'
import About from '../Components/sections/About'
import Places from '../Components/sections/Places'
import Technology from '../Components/sections/Technology'

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

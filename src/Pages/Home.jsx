import { lazy } from 'react'
import Container from '../Components/Container'
import Places from '../Components/sections/Places'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Hero = lazy(() => import('../Components/sections/Hero'))
const Tour = lazy(() => import('../Components/sections/Tour'))
const About = lazy(() => import('../Components/sections/About'))
const Technology = lazy(() => import('../Components/sections/Technology'))

const Home = () => {
  return (
    <Container>
      <LazyLoadComponent>
        <Hero />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <About />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Technology />
      </LazyLoadComponent>

      <Places />

      <LazyLoadComponent>
        <Tour />
      </LazyLoadComponent>
    </Container>
  )
}

export default Home

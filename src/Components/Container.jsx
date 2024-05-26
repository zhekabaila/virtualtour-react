import Footer from './Footer'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container

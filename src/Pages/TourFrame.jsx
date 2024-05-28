import PropTypes from 'prop-types'

const TourFrame = ({ route }) => {
  return (
    <div>
      <iframe
        src={route}
        className="w-full h-screen border-none"
        title="3DVista Tour"
      />
    </div>
  )
}

TourFrame.propTypes = {
  route: PropTypes.string.isRequired,
}

export default TourFrame

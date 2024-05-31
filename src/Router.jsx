import Home from './Pages/Home'
import TourFrame from './Pages/TourFrame'
import { tourRoutes } from './data/tourRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {tourRoutes.map(({ path, route }, index) => (
          <Route
            key={index}
            path={path}
            element={<TourFrame route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router

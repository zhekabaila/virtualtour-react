import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TourFrame from './Pages/TourFrame'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tours/main"
          element={<TourFrame route="/tours/gerbang/index.htm" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

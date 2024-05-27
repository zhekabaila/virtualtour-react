import Home from './Pages/Home'
import TourFrame from './Pages/TourFrame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/main" element={<TourFrame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TourFrame from './components/TourFrame'

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

import Home from './Pages/Home'
import TourFrame from './Pages/TourFrame'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/main" element={<TourFrame />} />
      </Routes>
    </Router>
  )
}

export default App

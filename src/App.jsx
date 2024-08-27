import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App

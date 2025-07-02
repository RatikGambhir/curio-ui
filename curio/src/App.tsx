import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProfileSettings from './pages/ProfileSettings'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App

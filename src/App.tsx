import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DevLog from './pages/DevLog'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/devlog' element={<DevLog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

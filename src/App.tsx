import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DevLog from './pages/DevLog'
import { SelectedProvider } from './store/selected';

function App() {
  return (
    <SelectedProvider>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/devlog' element={<DevLog />} />
          </Routes>
        </Router>
      </div>
    </SelectedProvider>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { SelectedProvider } from './store/selected';

function App() {
  return (
    <SelectedProvider>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </SelectedProvider>
  )
}

export default App

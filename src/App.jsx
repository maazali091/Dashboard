import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <div className='app'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Sidebar sidebar={sidebar} setSidebar={setSidebar} />} />
            </Routes>
            <Home />
        </BrowserRouter>
    </div>
  )
}

export default App

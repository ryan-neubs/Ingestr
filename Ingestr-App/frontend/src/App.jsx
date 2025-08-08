import { useState } from 'react'
import LandingPage from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

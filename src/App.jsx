import { useState } from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import SejaVoluntario from './pages/seja-voluntario/SejaVoluntario'
import './styles/globalStyle.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/seja-voluntario' element={<SejaVoluntario/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,BrowserRouter, Navigate} from "react-router-dom"
import Orders from './pages/Orders'
import Products from './pages/Products'

function App() {
  return (
    <>
    <Routes>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='*' element={<Navigate to={"/orders"}></Navigate>}></Route>
    </Routes>
      
    </>
  )
}

export default App

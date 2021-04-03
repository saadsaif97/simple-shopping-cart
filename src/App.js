import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MyGrid from './components/MyGrid'
import Cart from './features/cart/Cart'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MyGrid />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Aboute from './pages/Aboute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SerchBar from './components/SerchBar'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md;px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SerchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/about' element={<Aboute />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

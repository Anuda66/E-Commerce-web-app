import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoopContext } from '../context/shopContext'
import { CgProfile } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";


function Navbar() {

  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItem } = useContext(ShoopContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItem({})
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to={'/'}><img src={assets.logo} alt="Logo" className='w-36' /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
        <NavLink to="/" className='flex flex-col item-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/collection" className='flex flex-col item-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to="/about" className='flex flex-col item-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to="/contact" className='flex flex-col item-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} alt="Search Icon" className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img onClick={()=> token ? null : navigate('/login') } src={assets.profile_icon} alt="profile Icon" className='w-5 cursor-pointer' />
          {/* Dropdown menu---------------------------------------------- */}
          {
            token && 
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
            <div className='flex flex-col gap-2 w-40 py-3 px-2 bg-white text-gray-500 rounded shadow-md border border-gray-200 '>
              <p className='cursor-pointer hover:text-black flex items-center gap-1'> <CgProfile /> My Profile</p>
              <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-black flex items-center gap-1'><FaTools />Order</p>
              <hr />
              <p onClick={logout} className='cursor-pointer hover:text-black flex items-center gap-1'><GrLogout />Logout</p>
            </div>
          </div>
          }
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt='' className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt='menu Icon' className='w-5 cursor-pointer sm:hidden ' />
      </div>

      {/* Sidebar menu ----------------------------------------------------------*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border ' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border ' to='/collection'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border ' to='/about'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border ' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar

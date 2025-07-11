import React, { useContext, useEffect, useState } from 'react'
import { ShoopContext } from '../context/shopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'


function Cart() {

  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShoopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item]) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
      //console.log(tempData);
      setCartData(tempData)
    }
  }, [cartItem])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)

            return (
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-col-[4fr_2fr_0.5fr] items-center gap-4 justify-between '>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'> {productData.name} </p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p> {currency}{productData.price} </p>
                      <p className='px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50'> {item.size} </p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" defaultValue={item.quantity} min={1} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px] '>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/placeOrder')} className='bg-black text-white text-sm my-8 py-3 px-6 cursor-pointer active:bg-gray-700'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

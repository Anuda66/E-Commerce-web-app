import React, { useContext } from 'react'
import { ShoopContext } from '../context/shopContext'
import Title from './Title'

function CartTotal() {

  const { currency, delivery_fee, getCartAmount } = useContext(ShoopContext)

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAlS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between '>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b> {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee } </b>
        </div>
      </div>

    </div>
  )
}

export default CartTotal

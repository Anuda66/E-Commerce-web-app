import React, { useContext, useEffect, useState } from 'react'
import { ShoopContext } from '../context/shopContext'

function Cart() {

  const {products, currency, cartItem} = useContext(ShoopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem){
      for (const item in cartItem[items]){
        if (cartItem[items][item]){
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
  },[cartItem])

  return (
    <div>
      
    </div>
  )
}

export default Cart

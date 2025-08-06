import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShoopContext } from '../context/shopContext';

function ProductItem({ id, images, name, price }) {

    const { currency } = useContext(ShoopContext);

    return (

        <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
            <div className='overflow-hidden '>
                <img className='hover:scale-110 transition ease-in-out' src={images[0]} alt="product Image" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
           
        </Link>
    )
}

export default ProductItem

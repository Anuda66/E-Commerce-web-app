import React, { useContext, useEffect, useState } from 'react'
import { ShoopContext } from '../context/shopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function RelatedProduct({ category, subCategory }) {

    const { products } = useContext(ShoopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice()

            productCopy = productCopy.filter((item) => category === item.category)
            productCopy = productCopy.filter((item) => subCategory === item.subCategory)

            const sliced = productCopy.slice(0, 5);
            setRelated(sliced);  
            console.log(sliced); 
        }
    }, [products, category, subCategory])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProduct

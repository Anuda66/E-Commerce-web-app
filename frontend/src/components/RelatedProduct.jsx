import React, { useContext, useEffect, useState } from 'react'
import { ShoopContext } from '../context/shopContext'

function RelatedProduct({category, subCategory}) {

    const { products } = useContext(ShoopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice()

            productCopy = productCopy.filter((item)=> category === item.category)
            productCopy = productCopy.filter((item)=> subCategory === item.subCategory)

            console.log(productCopy.slice(0, 4));
            
        }
    },[products])

    return (
        <div>

        </div>
    )
}

export default RelatedProduct

import React, { use, useContext, useEffect, useState} from 'react'
import { ShoopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    
    const { products } = useContext(ShoopContext);
    //console.log(products);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLECTION"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto excepturi itaque incidunt earum nostrum doloremque cupiditate sunt impedit temporibus molestiae. Nostrum, culpa. Quas nobis quia minus praesentium cumque, quaerat harum?</p>
            </div>

            {/* Rendering product-------------------------------------------------------- */}
            <div  className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((item, index)=>(
                        <ProductItem key={index} id={item._id} images={item.images} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection

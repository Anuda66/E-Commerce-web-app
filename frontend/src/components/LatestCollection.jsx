import React, { use, useContext, useEffect, useState} from 'react'
import { ShoopContext } from '../context/shopContext'
import Title from './Title';

function LatestCollection() {
    

    const { products } = useContext(ShoopContext);
    console.log(products);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLECTION"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto excepturi itaque incidunt earum nostrum doloremque cupiditate sunt impedit temporibus molestiae. Nostrum, culpa. Quas nobis quia minus praesentium cumque, quaerat harum?</p>
            </div>

        </div>
    )
}

export default LatestCollection

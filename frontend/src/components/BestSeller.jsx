import React, { useContext, useEffect, useState } from 'react';
import { ShoopContext } from '../context/shopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    const { products } = useContext(ShoopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller === true);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, cum amet qui dolor incidunt maiores? Ipsam ea facilis quaerat corrupti?</p>
            </div>

            {/* Rendering product-------------------------------------------------------- */}
            <div  className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} images={item.images} name={item.name} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller

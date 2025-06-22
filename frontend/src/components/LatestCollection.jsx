import React, {useContext} from 'react'
import { ShoopContext } from '../context/shopContext'

function LatestCollection() {

    const { products } = useContext(ShoopContext);
    console.log(products);
    
    return (
        <div>
            
        </div>
    )
}

export default LatestCollection

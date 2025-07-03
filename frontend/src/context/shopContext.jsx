//commen varibles and state variable

import { createContext, useEffect, useState } from "react";
import { products} from '../assets/assets';

export const ShoopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({})

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem)

        if (cartData[itemId]){
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }

        }
        else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)
    }

    useEffect(()=>{
        console.log(cartItem);
        
    },[cartItem])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItem, addToCart,
    }

    return (
        <ShoopContext.Provider value={value}>
            {props.children}
        </ShoopContext.Provider>
    )
}

export default ShopContextProvider;
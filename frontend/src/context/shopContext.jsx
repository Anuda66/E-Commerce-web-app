//commen varibles and state variable

import { createContext } from "react";
import { products} from '../assets/assets';

export const ShoopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const deliveryFee = 10;

    const value = {
        products, currency, deliveryFee 
    }

    return (
        <ShoopContext.Provider value={value}>
            {props.children}
        </ShoopContext.Provider>
    )
}

export default ShopContextProvider;
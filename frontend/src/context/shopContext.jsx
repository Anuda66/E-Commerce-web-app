//commen varibles and state variable

import { createContext, useState } from "react";
import { products} from '../assets/assets';

export const ShoopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShoopContext.Provider value={value}>
            {props.children}
        </ShoopContext.Provider>
    )
}

export default ShopContextProvider;
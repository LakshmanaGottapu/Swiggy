import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import {Product} from '../utils/Interfaces';

export const CartContext = createContext<{cartItems:Product[], setCartItems:Dispatch<SetStateAction<Product[]>> }>({cartItems:[], setCartItems: () => 0 });

export const CartProvider = ({children}:{children:ReactNode}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            { children }
        </CartContext.Provider>
    )
}
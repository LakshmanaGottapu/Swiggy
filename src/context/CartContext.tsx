import { createContext, ReactNode, useReducer, useContext, useState, Dispatch, SetStateAction } from "react";
import { Product } from '../utils/Interfaces';
export type CardContainerType = {
    products: Array<Product>,
    setProducts: Dispatch<SetStateAction<Product[]>>,
    isAllProducts: boolean,
    setIsAllProducts: Dispatch<SetStateAction<boolean>>,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}
export type CartType = {
    products: Record<string, { product: Product; quantity: number }>; // All product entries
    ids: string[]; // Separate `ids` key
} 

const initialState:CartType = {
    ids:[],
    products:{}
}
export enum actionType {
    add="add", delete="delete", increment="increment", decrement="decrement"
}
export const CardContainerContext = createContext<CardContainerType>({products:[], setProducts:()=>undefined, isAllProducts:false, setIsAllProducts:()=>undefined, page:1, setPage:()=>undefined});
export const CartContext = createContext({cartState:initialState, dispatchCartAction: ({}:{product:Product, type:actionType}) => {
    // throw new Error("dispatchCartAction is not implemented yet."); // Placeholder
  },});
function reducer(state:CartType, action:{product:Product,type:actionType}) {
    const {product, type} = action;
    const {id} = product;
    switch (type) {
        case actionType.add:{
            if(state.products[id] !==undefined ) ++state.products[id].quantity;
            else  {
                state.products[id] = {product,quantity:1}
                state.ids.push(id)
            }
            return {...state}
        }
        case actionType.delete:{
            if(state.products[id] !== undefined){
                delete state.products[id];
                const index = state.ids.indexOf(id);
                if(index>=0) state.ids.splice(index,1);
                return {...state}
            }
            break;
        }
        case actionType.increment:{
            ++state.products[id].quantity
            return {...state}
        }
        case actionType.decrement:{
            --state.products[id].quantity
            if(state.products[id].quantity == 0){
                delete state.products[id]
                const index = state.ids.indexOf(id);
                if(index>=0) state.ids.splice(index,1);
            }
            return {...state}
        }
    }
    return state;
}
export const CardContainerProvider = ({ children }: { children: ReactNode }) => {
    const [isAllProducts, setIsAllProducts] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    return (
        <CardContainerContext.Provider value={{ products, setProducts, isAllProducts, setIsAllProducts, page, setPage }}>
            {children}
        </CardContainerContext.Provider>
    )
}
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ cartState, dispatchCartAction }}>
            {children}
        </CartContext.Provider>
    )
}
export function getQuantity(id:string){
    const {cartState} = useContext(CartContext);
    return cartState.products[id] !== undefined ? cartState.products[id].quantity : 0;
  }
// export const CategoryProvider = ({ children }: { children: ReactNode }) => {
//     const [categories, setCategories] = useState<String[]>([]);
//     return (
//         <CategoryContext.Provider value={{ categories, setCategories }}>
//             {children}
//         </CategoryContext.Provider>
//     )
// }
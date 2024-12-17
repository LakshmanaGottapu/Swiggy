import { createContext, ReactNode, useReducer } from "react";
import { Product } from '../utils/Interfaces';
export type CartType = {
    products: Record<string, { product: Product; quantity: number }>; // All product entries
    ids: string[]; // Separate `ids` key
  };  

const initialState:CartType = {
    ids:['product01'],
    products:{
        'product01':{
            product:{
                id:"",  title: "string",
                price: 0,
                restro: "string",
                categoryType: "string",
                img: "string"
            },
            quantity:0
        }
    }
}
export enum actionType {
    add="add", delete="delete"
}
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
            if(state.products[id].quantity == 1){
                delete state.products[id];
                const index = state.ids.indexOf(id);
                if(index>0) state.ids.splice(index,1)
            }
            else --state.products[id].quantity
            return {...state}
        }
        default : return state;
    }
}
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ cartState, dispatchCartAction }}>
            {children}
        </CartContext.Provider>
    )
}
// export const CategoryProvider = ({ children }: { children: ReactNode }) => {
//     const [categories, setCategories] = useState<String[]>([]);
//     return (
//         <CategoryContext.Provider value={{ categories, setCategories }}>
//             {children}
//         </CategoryContext.Provider>
//     )
// }
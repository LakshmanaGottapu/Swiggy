import { createContext, ReactNode, useReducer, Dispatch } from "react";
import { Product } from '../utils/Interfaces';
export type CartType = {
    products: Record<string, { product: Product; quantity: number }>; // All product entries
    ids: string[]; // Separate `ids` key
  };  

const initialState:CartType = {
    ids:['product01', 'product02'],
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
    },
    'product02':{
        product:{
            id:"",  title: "string",
            price: 0,
            restro: "string",
            categoryType: "string",
            img: "string"
        },
        quantity:0
    }
    },
}
export enum actionType {
    add="add", delete="delete"
}
export const CartContext = createContext({initialState, dispatchCartAction: () => {
    throw new Error("dispatchCartAction is not implemented yet."); // Placeholder
  },});
function reducer(state:CartType, action:{id:string,type:actionType}) {
    switch (action.type) {
        case actionType.add:{
            if(state.products[action.id] !==undefined ) ++state.products[action.id].quantity;
            else  {state.products[action.id].quantity = 1; state.ids.push(action.id)}
            return {...state}
        }
        case actionType.delete:{
            if(state.products[action.id].quantity == 1){
                delete state.products[action.id];
                const index = state.ids.indexOf(action.id);
                if(index>0) state.ids.splice(index,1)
            }
            else --state.products[action.id].quantity
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
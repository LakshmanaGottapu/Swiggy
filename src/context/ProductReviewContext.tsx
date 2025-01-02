import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { ProductReview } from "../utils/Interfaces";

type InitialState = {
    reviews: ProductReview[],
    setReviews: Dispatch<SetStateAction<ProductReview[]>>
}
const initialState:InitialState = {reviews:[], setReviews: ()=>0}
export const ProductReviewContext = createContext(initialState);

export function ProductReviewContextProvider({children}:{children:ReactNode}){
    const [reviews, setReviews] = useState<ProductReview[]>([]);
    return(
        <ProductReviewContext.Provider value={{reviews, setReviews}}>
            {children}
        </ProductReviewContext.Provider>
    )
}
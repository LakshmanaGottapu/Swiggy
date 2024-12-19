import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { Product } from '../utils/Interfaces';

export type CardContainerType = {
    products: Array<Product>,
    setProducts: Dispatch<SetStateAction<Product[]>>,
    isAllProducts: boolean,
    setIsAllProducts: Dispatch<SetStateAction<boolean>>,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export const CardContainerContext = createContext<CardContainerType>({products:[], setProducts:()=>undefined, isAllProducts:false, setIsAllProducts:()=>undefined, page:1, setPage:()=>undefined});

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

import { RefObject, useEffect, useState, useMemo, Dispatch, SetStateAction, useCallback } from "react";
import { Product } from "./Interfaces";
export async function fetchData(url: string, headers = {}) {
    const response = await fetch(url, {
        headers,
        method: 'GET'
    });
    const data = await response.json();
    return data;
}
export function useFetchProducts(page:number, isAllProducts:boolean,setIsAllProducts:Dispatch<SetStateAction<boolean>>) {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        if(!isAllProducts)
            fetchData("http://localhost:3000/products_0"+page)
            .then(data => setProducts(prev => [...prev, ...data]))
            .catch(err => {
                console.error(err);
                setIsAllProducts(true);
            });
    }, [page])
    return products;
}
export function useFetchUserInfo() {
    const [userInfo, setUserInfo] = useState([]);
    async function fetchData() {
        const fetchData = await fetch("http://localhost:3000/userinfo");
        const data = await fetchData.json();
        return data;
    }
    useEffect(() => {
        fetchData().then(data => setUserInfo(data));
    }, [])
    return userInfo;
}

export function useIntersectionObserver(elementRef:RefObject<Element>, cb:()=>void, products:Product[]){
    const observerAction = useCallback(function (entries:IntersectionObserverEntry[]){
        entries.forEach(entry => {
            if(entry.isIntersecting) cb();
        })    
    },[products])
    const ib = useMemo(() => new IntersectionObserver(observerAction, {threshold:0.5}), [products])
    useEffect(() => {
        const targetElement = elementRef.current
        if(targetElement)
            ib.observe(targetElement);
        return () => {
            if(targetElement)
                ib.unobserve(targetElement);
        }
    },[products])
}


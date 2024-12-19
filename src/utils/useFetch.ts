import { RefObject, useEffect, useState, useMemo, useContext } from "react";
import { CardContainerContext } from "../context/CardContainerContext";

export async function fetchData(url: string, headers = {}) {
    const response = await fetch(url, {
        headers,
        method: 'GET'
    });
    const data = await response.json();
    return data;
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
export function randomColorRGBA() {
    const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255)
    const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
    return `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;
}
export function useFetchProducts() {
    const { products, setProducts, isAllProducts, setIsAllProducts, page } = useContext(CardContainerContext);
    const productPerPage = 10
    useEffect(() => {
        if ( !isAllProducts && products.length/productPerPage < page )
            fetchData("http://localhost:3000/products_0" + page)
                .then(data => setProducts(prev => [...prev, ...data]))
                .catch(err => {
                    console.error(err);
                    setIsAllProducts(true);
                });
    }, [page])
    return products;
}
export function useIntersectionObserver(elementRef: RefObject<Element>) {
    const { isAllProducts, setPage } = useContext(CardContainerContext);
    const ib = useMemo(() => new IntersectionObserver(function (entries: IntersectionObserverEntry[]) {
        console.log({ entries })
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                (entry.target as HTMLDivElement).style.backgroundColor = randomColorRGBA();
                if (!isAllProducts)
                    setPage(prevPage => prevPage + 1)
            }
        })
    }, { threshold: 0.5 }), [])
    useEffect(() => {
        const targetElement = elementRef.current
        if (targetElement)
            ib.observe(targetElement);
        return () => {
            if (targetElement)
                ib.unobserve(targetElement);
        }
    }, [])
}


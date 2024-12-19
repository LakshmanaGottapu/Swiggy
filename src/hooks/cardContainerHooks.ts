import { RefObject, useEffect, useMemo, useContext } from "react";
import { randomColorRGBA, fetchData } from "../utils/utils";
import { CardContainerContext } from "../context/CardContainerContext";
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
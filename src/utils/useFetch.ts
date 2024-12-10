import { useEffect, useState } from "react";
import { Product } from "./Interfaces";
export async function fetchData(url: string, headers = {}) {
    const response = await fetch(url, {
        headers,
        method: 'GET'
    });
    const data = await response.json();
    return data;
}
export function useFetchProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchData("http://localhost:3000/products").then(data => setProducts(data));
    }, [])
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


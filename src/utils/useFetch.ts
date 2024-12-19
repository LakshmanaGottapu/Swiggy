import { useEffect, useState } from "react";

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




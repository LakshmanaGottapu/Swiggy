import { useFetchProducts, useIntersectionObserver } from "../utils/useFetch"
import ProductCard from "./ProductCard"
import {Row} from 'react-bootstrap';
import { useRef } from "react";
import CardContainerShimmer from "./CardContainerShimmer";

const CardContainer = () => {
    const observerRef = useRef<Element>(null);
    const products = useFetchProducts();
    useIntersectionObserver(observerRef);
    
    // if no products, return loading message
    if (!products) return <p>Loading...</p>;
    return (
        <>
            <Row xs={1} sm={2} lg={4} xl={5} xxl={8} >
                {products.length > 0 ? products.map(product => <ProductCard key={product.id} product={product} />) : <CardContainerShimmer/> }
            </Row>
            <Row ref={observerRef} style={{height:'5px', backgroundColor:'black', width:'100%'}}></Row>
        </>
    )
}

export default CardContainer

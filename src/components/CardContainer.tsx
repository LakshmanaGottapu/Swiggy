import { useFetchProducts, useIntersectionObserver } from "../utils/useFetch"
import ProductCard from "./ProductCard"
import {Row, Col} from 'react-bootstrap';
import { useState, useRef } from "react";
import CardContainerShimmer from "./CardContainerShimmer";
// const Observer = memo(()=><Row style={{height:'5px', backgroundColor:'black'}}></Row>)
const CardContainer = () => {
    const observerRef = useRef<Element>(null);
    const [page, setPage] = useState(1);
    const [isAllProducts, setIsAllProducts] = useState<boolean>(false);
    const products = useFetchProducts(page, isAllProducts, setIsAllProducts);
    function fetchMore(){
        if(!isAllProducts)
            setPage(page + 1);
    }
    useIntersectionObserver(observerRef, fetchMore, products);
    
    // if no products, return loading message
    if (!products) return <p>Loading...</p>;
    return (
        <>
            <Row xs={1} sm={2} lg={4} xl={5} xxl={8} >
                {products.length > 0 ? (<>
                {products.map(product => <ProductCard key={product.id} product={product} />)}
                <Col ref={observerRef} style={{height:'5px', backgroundColor:'black', width:'100%'}}></Col>
                </>) :
                (<>
                <Col ref={observerRef} style={{height:'5px', backgroundColor:'black', width:'100%'}}></Col>
                <CardContainerShimmer/></>)} 
            </Row>
        </>
    )
}

export default CardContainer

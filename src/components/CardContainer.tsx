import { useFetchProducts } from "../utils/useFetch"
import ProductCard from "./ProductCard"
import {Row} from 'react-bootstrap';
const CardContainer = () => {
    const products = useFetchProducts();
    
    // if no products, return loading message
    if (!products) return <p>Loading...</p>;
    return (
        <Row xs={1} sm={2} lg={4} xl={5} xxl={8} >
            {products.map(product => <ProductCard key={product.id} product={product} />)} 
        </Row>
    )
}

export default CardContainer

import { Card, Button, Col } from "react-bootstrap";
import { Product } from "../utils/Interfaces";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function ProductCard({ product }: { product: Product }) {
  const { title, price, restro, img } = product;
  const { setCartItems } = useContext(CartContext);
  function addToCart(){
    setCartItems(cartItems => [...cartItems, product]);
    // console.log("Added to cart", product);
  }
  return (
    <Col >
      <Card className="text-center" border="primary" style={{padding:'0.5rem',margin:'0.5rem' }}>
        <Card.Img variant="top" src={img} style={{height: '8.5rem', width:'15.5rem', transform: 'translate(-2%,-5%)'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            yummy food item
          </Card.Text>
          <Card.Text>price: {price}/-</Card.Text>
          <Card.Text>restaurant: {restro}</Card.Text>
          <Button variant="primary" onClick={addToCart}>Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;

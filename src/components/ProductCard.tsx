import { Card, Button, Col } from "react-bootstrap";
import { Product } from "../utils/Interfaces";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function ProductCard({ product }: { product: Product }) {
  const { id, title, price, restro, img } = product;
  const { setCartItems } = useContext(CartContext);
  function addToCart(){
    setCartItems(cartItems => [...cartItems, product]);
    // console.log("Added to cart", product);
  }
  return (
    <Col key={id}>
      <Card className="text-center" border="primary" style={{ width: '21rem', height:'35rem', margin:'0.5rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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

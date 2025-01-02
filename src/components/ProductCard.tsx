import { Card, Button, Col } from "react-bootstrap";
import { Product } from "../utils/Interfaces";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { actionType } from "../context/CartContext";
import {getQuantity} from "../context/CartContext";
import { Link } from "react-router-dom";
function ProductCard({ product }: { product: Product }) {
  const { id, title, price, restro, img } = product;
  const { dispatchCartAction } = useContext(CartContext);
  const quantity = getQuantity(id);
  return (
    <Col >
    <Link to={"/product/"+id}>
      <Card className="text-center" border="primary" style={{padding:'0.5rem',margin:'0.5rem' }}>
        <Card.Img variant="top" src={img} style={{height: '8.5rem', width:'15.5rem', transform: 'translate(-2%,-5%)'}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            yummy food item
          </Card.Text>
          <Card.Text>price: {price}/-</Card.Text>
          <Card.Text>restaurant: {restro}</Card.Text>
          {quantity>0 ? <>
          <Button variant="primary" onClick={()=>dispatchCartAction({product, type:actionType.increment})}>+</Button>
          <Button variant="danger" onClick={()=>dispatchCartAction({product, type:actionType.decrement})}>-</Button>
          </> :<Button variant="primary" onClick={()=>dispatchCartAction({product, type:actionType.add})}>Add to cart</Button>
          }
          {quantity>0 && <Card.Text>{quantity}</Card.Text>}
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
}

export default ProductCard;

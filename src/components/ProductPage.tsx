import { useContext } from "react"
import { CardContainerContext } from "../context/CardContainerContext"
// import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
function ProductPage() {
  const params = useParams();
  const { products } = useContext(CardContainerContext)
  const product = products.find(prod => prod.id == params.id);
  if (!product) return (<div>No such product</div>)
  const { title, price, restro, img } = product;
  // const { dispatchCartAction } = useContext(CartContext);
  // const quantity = getQuantity(id);
  return (
    <Card style={{ padding: '0.5rem', margin: '0.5rem' }}>
      <Card.Img variant="top" src={img} style={{ height: '20rem', width: '50rem' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          yummy food item
        </Card.Text>
        <Card.Text>price: {price}/-</Card.Text>
        <Card.Text>restaurant: {restro}</Card.Text>
        {/* {quantity>0 ? <>
            <Button variant="primary" onClick={()=>dispatchCartAction({product, type:actionType.increment})}>+</Button>
            <Button variant="danger" onClick={()=>dispatchCartAction({product, type:actionType.decrement})}>-</Button>
            </> :<Button variant="primary" onClick={()=>dispatchCartAction({product, type:actionType.add})}>Add to cart</Button>
            } 
            {quantity>0 && <Card.Text>{quantity}</Card.Text>} */}
        <Card.Text>rating: </Card.Text>
        <Card.Text>reviews: </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductPage

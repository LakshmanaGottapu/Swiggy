import { Card, Button } from 'react-bootstrap'
import { Product } from '../utils/Interfaces'

const CartItem = ({ item }: { item: {product:Product, quantity:number} }) => {
    const { title, price, restro } = item.product;
    const {quantity} = item
    return (
        <Card>
            <Card.Header as="h5">Cart Item</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>price: {price}/-</Card.Text>
                <Card.Text>restaurant: {restro}</Card.Text>
                <Card.Text>quantity: {quantity}</Card.Text>
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem

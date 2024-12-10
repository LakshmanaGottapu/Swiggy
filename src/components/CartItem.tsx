import { Card, Button } from 'react-bootstrap'
import { Product } from '../utils/Interfaces'

const CartItem = ({ item }: { item: Product }) => {
    const { title, price, restro } = item;
    return (
        <Card>
            <Card.Header as="h5">Cart Item</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>price: {price}/-</Card.Text>
                <Card.Text>restaurant: {restro}</Card.Text>
                <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem

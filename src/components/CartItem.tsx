import { Card, Button } from 'react-bootstrap'
import { Product } from '../utils/Interfaces'
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { actionType } from '../context/CartContext'
const CartItem = ({ item }: { item: {product:Product, quantity:number} }) => {
    const { title, price, restro } = item.product;
    const {quantity} = item
    const {dispatchCartAction} = useContext(CartContext);
    return (
        <Card>
            <Card.Header as="h5">Cart Item</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>price: {price}/-</Card.Text>
                <Card.Text>restaurant: {restro}</Card.Text>
                <Card.Text>quantity: {quantity}</Card.Text>
                <Card.Text>total cost: {quantity*price}</Card.Text>
                <Button variant="danger" onClick={()=>dispatchCartAction({product:item.product, type:actionType.delete})}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CartItem

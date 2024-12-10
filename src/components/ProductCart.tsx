import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
const ProductCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <h1>Cart Items</h1>
      {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
    </>
  )
}

export default ProductCart

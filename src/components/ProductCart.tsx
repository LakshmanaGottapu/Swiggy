import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
const ProductCart = () => {
  const { cartState } = useContext(CartContext);
  return (
    <>
      <h1>Cart Items</h1>
      {cartState.ids.map(cartId => <CartItem key={cartId} item={cartState.products[cartId]}/>)}
    </>
  )
}

export default ProductCart

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
const ProductCart = () => {
  const { cartState } = useContext(CartContext);
  function totalCost(){
    return cartState.ids.reduce((sum, id) => {
      const quantity = cartState.products[id].quantity;
      const price = cartState.products[id].product.price;
      return sum+(quantity*price);
    },0)
  }
  return (
    <>
      <h1>Cart Items</h1>
      {cartState.ids.map(cartId => <CartItem key={cartId} item={cartState.products[cartId]}/>)}
      {cartState.ids.length>0 && <h3>cart total: {totalCost()}</h3>}
      {/* <h3>cart total: {}</h3> */}
    </>
  )
}

export default ProductCart

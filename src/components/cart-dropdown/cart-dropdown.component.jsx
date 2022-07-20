import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'


import * as S from './cart-dropdown.styles.jsx'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  const close = () => {
    setIsCartOpen(false);
  };

  return (
    <S.CartDropdownContainer onMouseLeave={close}>
      <S.CartItems scroll={cartItems.length}>
        {
          cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (<S.EmptyMessage> Your cart is empty</S.EmptyMessage>)
        }
        { }
      </S.CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </S.CartDropdownContainer>
  )

}

export default CartDropdown;
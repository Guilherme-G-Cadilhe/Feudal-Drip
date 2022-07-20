import { useContext } from 'react'



import { CartContext } from '../../contexts/cart.context'

import * as S from './cart-icon.styles.jsx'

const CartIcon = () => {

  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen((previous) => { return !previous })
  }

  return (
    <S.CartIconContainer onMouseEnter={toggleIsCartOpen} onClick={toggleIsCartOpen}>
      <S.ShoppingIcon />
      <S.ItemCount>{cartCount}</S.ItemCount>
    </S.CartIconContainer>
  )

}

export default CartIcon
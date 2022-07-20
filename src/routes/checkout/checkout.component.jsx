import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import * as S from './checkout.styles.jsx'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)


  return (
    <S.CheckoutContainer>
      <S.CheckoutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeader>
      {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
      <S.Total>Total: BRL ${cartTotal}</S.Total>
    </S.CheckoutContainer>
  )
}

export default Checkout
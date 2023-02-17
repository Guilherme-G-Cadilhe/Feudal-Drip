import CheckoutItem from '../../components/checkout-item/checkout-item.component'

// ======== Stripe ========
import PaymentForm from '../../components/payment-form/payment-form.component'

import * as S from './checkout.styles'

// Redux
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
      <PaymentForm />
    </S.CheckoutContainer>
  )
}

export default Checkout
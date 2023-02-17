import { useNavigate } from "react-router-dom";
import * as S from "./cart-dropdown.styles";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const close = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <S.CartDropdownContainer onMouseLeave={close}>
      <S.CartItems scroll={cartItems.length}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <S.EmptyMessage> Your cart is empty</S.EmptyMessage>
        )}
        {}
      </S.CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </S.CartDropdownContainer>
  );
};

export default CartDropdown;

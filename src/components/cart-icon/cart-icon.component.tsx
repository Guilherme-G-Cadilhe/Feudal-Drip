import * as S from "./cart-icon.styles";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <S.CartIconContainer onMouseEnter={toggleIsCartOpen} onClick={toggleIsCartOpen}>
      <S.ShoppingIcon />
      <S.ItemCount>{cartCount}</S.ItemCount>
    </S.CartIconContainer>
  );
};

export default CartIcon;

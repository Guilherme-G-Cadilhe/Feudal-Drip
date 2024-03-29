import "./cart-item.styles.scss";
import { FC } from "react";
import { CartItem as CartItemType } from "../../store/cart/cart.types";

export type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;

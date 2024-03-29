import "./product-card.styles.scss";
import { FC } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CategoryItem } from "../../store/categories/categories.types";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

export type ProductCartProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCartProps> = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addProductButton = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductButton}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

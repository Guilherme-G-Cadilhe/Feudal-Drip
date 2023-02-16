import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as FeudalLogo } from "../../assets/crown.svg";

import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

import { NavigationContainer, LogoContainer, NavLinks, NavLink, FooterNav, FooterHeading } from "./navigation.styles";

// Redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import * as CartSelector from "../../store/cart/cart.selector";

const Footer = () => {
  return (
    <FooterNav className="footer">
      <FooterHeading>I do not own those images</FooterHeading>
    </FooterNav>
  );
};

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(CartSelector.selectIsCartOpen);
  const dispatch = useDispatch();

  const userSignOut = async () => {
    try {
      dispatch(signOutStart());
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <FeudalLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={userSignOut}>
              {" "}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;

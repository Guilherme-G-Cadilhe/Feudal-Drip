import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as FeudalLogo } from '../../assets/crown.svg'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  FooterNav,
  FooterHeading
} from "./navigation.styles"

// Redux
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import * as CartSelector from '../../store/cart/cart.selector';

const Footer = () => {
  return (
    <FooterNav>
      <FooterHeading>I do not own those images</FooterHeading>
    </FooterNav>
  )
}

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(CartSelector.selectIsCartOpen)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <FeudalLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}> SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer className="footer" />
    </Fragment>
  )
}

export default Navigation
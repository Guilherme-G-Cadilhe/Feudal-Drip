import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import "./navigation.styles.scss"
import { ReactComponent as FeudalLogo } from '../../assets/crown.svg'

const Footer = () => {
  return (
    <p>I do not own those images</p>
  )
}

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <FeudalLogo className='logo' />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer className="footer" />
    </Fragment>
  )
}

export default Navigation
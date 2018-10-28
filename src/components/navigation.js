import React from 'react'
import Scrollspy from 'react-scrollspy'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import logoLg from '../images/header-logo.svg'
import logoSm from '../images/chocovitsa-sign.svg'
import chocolateIcon from '../images/chocolate.svg'
import compassIcon from '../images/compass.svg'
import chatIcon from '../images/chat.svg'

const NavItemLink = ({ icon, text, href, active = false }) => (
  <NavItem>
    <NavLink href={href} active={active}>
      <img src={icon} alt={text} /> {text}
    </NavLink>
  </NavItem>
)

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md" fixed="bottom" expand={true}>
        <NavbarBrand href="#top">
          <img
            className="navbar-brand-lg"
            src={logoLg}
            alt="Chocovitsa"
            height="40px"
          />
          <img
            className="navbar-brand-sm"
            src={logoSm}
            alt="Chocovitsa"
            height="40px"
          />
        </NavbarBrand>
        <Scrollspy
          items={['products', 'about', 'contact']}
          currentClassName="active"
          className="navbar-nav text-uppercase nav-fill"
          offset="-300"
        >
          <NavItemLink icon={chocolateIcon} text="Шоколади" href="#products" />
          <NavItemLink icon={compassIcon} text="За нас" href="#about" />
          <NavItemLink icon={chatIcon} text="Контакти" href="#contact" />
        </Scrollspy>
      </Navbar>
    )
  }
}

import React from 'react'
import Scrollspy from 'react-scrollspy'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap'
import { injectIntl } from 'react-intl'
import { navigate } from 'gatsby'
import locales from '../content/locales'
import logoLg from '../images/header-logo.svg'
import logoSm from '../images/chocovitsa-sign.svg'
import chocolateIcon from '../images/chocolate.svg'
import compassIcon from '../images/compass.svg'
import chatIcon from '../images/placeholder.svg'
import langIcon from '../images/translation.svg'
import moreIcon from '../images/more.svg'

const NavItemLink = ({ icon, text, href, active = false }) => (
  <NavItem>
    <NavLink href={href} active={active}>
      <img src={icon} alt={text} /> {text}
    </NavLink>
  </NavItem>
)

class Navigation extends React.Component {
  selectLang = langKey => {
    window.localStorage.setItem('language', langKey)
    navigate('/')
  }

  render() {
    const {
      intl: { messages },
    } = this.props

    const langDropdownItems = Object.values(locales).map(locale => (
      <DropdownItem onClick={() => this.selectLang(locale.path)}>
        {locale.locale}
      </DropdownItem>
    ))

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
          className="navbar-nav text-uppercase nav-fill mr-auto"
          offset="-300"
        >
          <NavItemLink
            icon={chocolateIcon}
            text={messages['navigation.products']}
            href="#products"
          />
          <NavItemLink
            icon={compassIcon}
            text={messages['navigation.about']}
            href="#about"
          />
          <NavItemLink
            icon={chatIcon}
            text={messages['navigation.contact']}
            href="#contact"
          />
        </Scrollspy>
        <Nav>
          <UncontrolledDropdown nav inNavbar direction="up">
            <DropdownToggle nav>
              <img src={langIcon} className="d-none d-md-block" />
              <img src={moreIcon} className="d-block d-md-none" />
            </DropdownToggle>
            <DropdownMenu right>{langDropdownItems}</DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default injectIntl(Navigation)

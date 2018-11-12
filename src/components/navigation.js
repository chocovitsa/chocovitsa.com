import React from 'react'
import Scrollspy from 'react-scrollspy'
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap'
import FormattedMessage, { injectIntl } from 'react-intl'
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

class Navigation extends React.Component {
  state = {
    langSelectOpen: false,
    langSelected: 'bg',
  }

  openLangSelect = () => {
    this.setState({
      langSelectOpen: !this.state.langSelectOpen,
    })
  }

  render() {
    const {
      intl: { messages },
    } = this.props
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

        <Dropdown
          isOpen={this.state.langSelectOpen}
          direction="up"
          inNavbar={true}
          toggle={this.openLangSelect}
        >
          <DropdownToggle>
            <span className={`flag-icon flag-icon-bg`} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <span className={`flag-icon flag-icon-gb`} />{' '}
              <span className={`flag-icon flag-icon-us`} />{' '}
              <span className={`flag-icon flag-icon-au`} /> English
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    )
  }
}

export default injectIntl(Navigation)

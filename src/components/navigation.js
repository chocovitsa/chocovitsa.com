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
import logo from '../images/header-logo.svg'

export default class Navigation extends React.Component {
  state = {
    collapsed: true,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand>
          <img src={logo} alt="Chocovitsa" height="40px" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Scrollspy
            items={['products', 'about', 'contact']}
            currentClassName="active"
            offset={-300}
            rootEl="a"
            className="navbar-nav text-uppercase float-right"
          >
            <NavItem>
              <NavLink href="#products">Шоколади</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">За нас</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Контакти</NavLink>
            </NavItem>
          </Scrollspy>
        </Collapse>
      </Navbar>
    )
  }
}

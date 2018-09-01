import React from 'react'
import Link from 'gatsby-link'
import Scrollspy from 'react-scrollspy'
import logo from '../../static/img/chocovitsa-logo.png'

const Navbar = ({ sticky }) => (
  <nav
    id="mainNav"
    className={
      sticky
        ? 'navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink'
        : 'navbar navbar-expand-lg navbar-dark'
    }
  >
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        <img src={logo} alt="Chocovitsa" />
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <Scrollspy
          items={['products', 'about', 'contact']}
          currentClassName="active"
          offset={-300}
          rootEl="a"
          className="navbar-nav text-uppercase ml-auto"
        >
          <li className="nav-item">
            <a className="nav-link" href="#products">
              Шоколади
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              За нас
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Контакти
            </a>
          </li>
        </Scrollspy>
      </div>
    </div>
  </nav>
)

export default Navbar

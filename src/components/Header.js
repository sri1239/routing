import React from 'react'
import Logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Link to="/" className='logo'>
        <img src={Logo} alt="" />
        <span>Routemate</span>
      </Link>
      <nav className='navigation'>
        <NavLink to="/" className='link' end>Home</NavLink>
        <NavLink to="/products" className='link'>Products</NavLink>
        <NavLink to="/contact" className='link'>Contact</NavLink>
        <NavLink to="/admin" className='link'>Admin Page</NavLink>
      </nav>
    </header>
  )
}

import React, { useState } from 'react'
import logo from './img/logo.png';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
  } from 'reactstrap'
  import { Link } from 'react-router-dom'
  
  const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
            <img alt='Minhas Séries' src={logo} height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

export default Header
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from "react-router-dom"

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand>Markete Hoşgeldiniz</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/"><h5 style={{ color: 'black', textDecoration: 'none' }}>Ana Sayfa</h5></Link></NavLink>
              <NavLink><Link to="/login"><h5 style={{ color: 'black', textDecoration: 'none' }}>Giriş Yap</h5></Link></NavLink>
              <NavLink><Link to="/signup"><h5 style={{ color: 'black', textDecoration: 'none' }}>Kayıt Ol</h5></Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
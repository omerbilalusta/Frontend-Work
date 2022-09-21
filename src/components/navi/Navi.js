import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import CartSummary from '../cart/CartSummary';
import {Link} from "react-router-dom"

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand><Link to="/">Market</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
            </NavItem>
            <CartSummary></CartSummary>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
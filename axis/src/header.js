import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
// import Icon from './Icon'

const Header = props => {
  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">AXIS for Wanted</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          AXIS
        </NavItem>
        <NavItem eventKey={2} href="#">

        </NavItem>
        <NavDropdown eventKey={3} title="資料を取り寄せる" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">
          My page
        </NavItem>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Header

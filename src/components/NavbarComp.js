import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'
import logo from '../static/logo.png';

const NavbarComp = () => {
  return (
  <div>
    <Navbar style={{marginBottom:"0", backgroundColor: "black"}} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="">
          <img src={logo} width="50" height="50"className="d-inline-block align-top" alt=""></img>
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link href="/home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="/order" className="nav-link-custom">Order</Nav.Link>
          <Nav.Link href="/contact" className="nav-link-custom">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavbarComp;

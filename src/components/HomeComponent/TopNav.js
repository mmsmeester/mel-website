import React from "react";
import "./Home.css";
import { Navbar, Nav } from "react-bootstrap";

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Brand href="#home" className="logo">
            MSW
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="mr-auto logo">
            <Nav.Link href="#home">Posts</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;

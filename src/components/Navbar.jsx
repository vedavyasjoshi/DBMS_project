import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

function Navbar({ Name, UserID }) {
    return (
        <div>
             <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href='/home?name=${Name}&user_id=${UserID}'>YouTube</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href='/vines?name=${Name}&user_id=${UserID}'>Vines</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/songs?name=${Name}&user_id=${UserID}'>Songs</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/gaming?name=${Name}&user_id=${UserID}'>Gaming</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href='/movies?name=${Name}&user_id=${UserID}'>Movies</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Vines</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Songs</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Gaming</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Movies</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">My Subscriptions</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="/">
        Logout
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Navbar

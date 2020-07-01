import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'



export default function NavigationBar(){
          return(
                    <div>
                              <Navbar bg="dark" variant="dark" expand="md" >
                              <Navbar.Brand href="#home">drbuddhisagarlamichhane.com</Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                              
                              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                                        <Nav >
                                        <Nav.Link href="#home">News</Nav.Link>
                                        <Nav.Link href="#link">Files</Nav.Link>
                                        <Nav.Link href="#login">Login</Nav.Link>
                                        </Nav>
                              </Navbar.Collapse>
                              
                              </Navbar>
                    </div>
          )
}


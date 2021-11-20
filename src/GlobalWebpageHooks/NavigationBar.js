
import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.css'


const NavigationBar = () => {







    return (

        
       
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >
            
                    <Navbar.Brand href="/Home">MorningStar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                          
                            <NavLink className="NavBarLinks" to="/Home">Home</NavLink>
                            <NavLink className="NavBarLinks"  to="/About">About</NavLink>
                            <NavLink className="NavBarLinks" to="/Contact">Contact</NavLink>
                            <NavLink className="NavBarLinks" to="/Connect">Connect</NavLink>
                            <NavLink className="NavBarLinks" to="/Classes">Classes</NavLink>
                            <NavLink className="NavBarLinks" to="/SchedulePage">Schedule</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                    </nav>
                </Container>
            </Navbar>
               
            </div>
        
 
    
    

    );








}
export default NavigationBar;

/*
 *
        <Navbar className="justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center" sticky="top"  >
            <a class="navbar-brand" href="#">MorningStar Dance</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <Nav.Link href="#Error">Error</Nav.Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                </form>
             </div>
            </nav>
        </Navbar> */
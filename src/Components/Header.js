import React, { Component } from "react"
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import logo from './logo.png'
// import styles from './Header_css.css'
import Button from "@restart/ui/esm/Button"
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Autorization from "../Pages/Autorization"
import Contacts from "../Pages/Contacts"
import Registration from "../Pages/Registration"
import Galery from "../Pages/Galery"
import Menu from "../Pages/Menu" //добавить файл

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="success" variant="dark">
                    <Container>
                        <Navbar.Brand href= "/">
                            <img 
                                src = {logo} 
                                height="50"
                                width="60"
                                hspace="0"
                                className="d-inline-block align-top"
                                alt="Logo not download"
                            /> Whittе Rabbitt 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/galery">Galery</Nav.Link>
                                <Nav.Link href="/menu">Menu</Nav.Link>
                                <Nav.Link href="/autorization">Autorization</Nav.Link>
                                <Nav.Link href="/registration">Registration</Nav.Link>
                            </Nav>  
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<About us/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/galery" element={<Galery/>} />
                        <Route exact path="/menu" element={<Menu/>} />
                        <Route exact path="/autorization" element={<Autorization/>} />
                        <Route exact path="/registration" element={<Registration/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}

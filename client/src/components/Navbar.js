import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Edvora Fullstack Assessment</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorites">My Favorites</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
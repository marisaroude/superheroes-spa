'use client'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle
                    className="border-light"
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/marvel">
                            Marvel
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/dc">
                            DC
                        </Nav.Link>
                        <Nav.Link className="text-white" href="/add-hero">
                            Agregar Heroe
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

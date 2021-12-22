import React from "react";
import { Navbar, Container } from "react-bootstrap";





export default function NavBar(props) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">User Records</Navbar.Brand>
            </Container>
        </Navbar>
    );
}
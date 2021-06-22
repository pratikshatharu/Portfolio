import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import pic from "./figures/pic.jpg"

function Topbar() {
    return (
        <>
            <Navbar bg="dark" expand="md">
                <Navbar.Brand href="#home"><img src={pic} alt="pic.." className="pic" />
                    <span className="text-white md-lex"> Port</span> <span className="text-danger">folio</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#about ">About </Nav.Link>
                        <Nav.Link className="text-white" href="#experience">Work Experience</Nav.Link>
                        <Nav.Link className="text-white" href="#contact">Contact </Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default Topbar;
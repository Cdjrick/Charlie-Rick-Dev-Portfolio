import React from "react";
import { Link } from "react-router-dom";

import './index.css'

import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <>
            <Navbar className='navBar'>
                <Container>
                    <Row className='navBar'>
                        <Col xs={12} className='p-1 text-center'>
                            <Navbar.Brand><Link to='/home' className='brandName'>CR</Link></Navbar.Brand>
                        </Col>
                        <Col xs={12} className="p-2 d-flex text-center align-items-center pageLinks">
                            <Nav>
                                <Row xs={12}>
                                    <Col><Link className='links' to='/aboutme'><i class="bi bi-person iconResize"></i></Link></Col>
                                    <Col className='mt-3'><Link className='links' to='/mywork'><i class="bi bi-image iconResize"></i></Link></Col>
                                    <Col className='mt-3'><Link className='links' to='/contactme'><i class="bi bi-calendar iconResize"></i></Link></Col>
                                    <Col className='mt-3'><Link className='links' to='/resume'><i class="bi bi-file-earmark-text iconResize"></i></Link></Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col xs={12} className='p-2 text-center socials'>
                            <Row>
                                <Col><a className='links' href='https://www.linkedin.com/in/charlie-rick-499a9120/'><i class="bi bi-linkedin iconResize"></i></a></Col>
                                <Col className='mt-3'><a className='links' href='https://github.com/Cdjrick'><i class="bi bi-github iconResize"></i></a></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


// <img src='/images/person.svg' alt='aboutMeLink' style={{color: 'white'}}></img>
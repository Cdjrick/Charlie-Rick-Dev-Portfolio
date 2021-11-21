import React, { createRef } from "react";
import { Link } from "react-router-dom";

import './index.css'

import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const state = { isTooltipOpen: false };

    const tooltipOpen = () => {
        this.setState({ isTooltipOpen: true });
    };

    const { isTooltipOpen } = this.state;

    return (
        <>
            <Navbar className='navBar'>
                <Container>
                    <Row className='navBar'>
                        <Col xs={12} className='p-1 text-center'>
                            <Navbar.Brand><Link to='/' className='brandName'>CR</Link></Navbar.Brand>
                        </Col>
                        <Col xs={12} className="p-2 d-flex text-center align-items-center pageLinks">
                            <Nav>
                                <Row xs={12}>
                                    <Col>
                                        <Link className='links' to='/aboutme'><i className="bi bi-person iconResize"></i></Link>
                                        <p ref={this.tooltip} id='tooltip' className={isTooltipOpen ? "" : "hidden"} >About Me</p>
                                    </Col>
                                    <Col className='mt-3'><Link className='links' to='/mywork'><i className="bi bi-image iconResize"></i></Link></Col>
                                    <Col className='mt-3'><Link className='links' to='/contactme'><i className="bi bi-calendar iconResize"></i></Link></Col>
                                    <Col className='mt-3'><Link className='links' to='/resume'><i className="bi bi-file-earmark-text iconResize"></i></Link></Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col xs={12} className='p-2 text-center socials'>
                            <Row>
                                <Col><a className='links' href='https://www.linkedin.com/in/charlie-rick-499a9120/'><i className="bi bi-linkedin iconResize"></i></a></Col>
                                <Col className='mt-3'><a className='links' href='https://github.com/Cdjrick'><i className="bi bi-github iconResize"></i></a></Col>
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
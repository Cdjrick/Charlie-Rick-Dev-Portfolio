import React from "react";
import { Link } from "react-router-dom";

import './index.css'

import { Navbar, Container, Nav, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const renderTooltipAM = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            About Me
        </Tooltip>
    )

    const renderTooltipMW = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            My Work
        </Tooltip>
    )

    const renderTooltipCM = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Contact Me
        </Tooltip>
    )

    const renderTooltipR = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Resume
        </Tooltip>
    )

    const renderTooltipLI = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Linkedin
        </Tooltip>
    )

    const renderTooltipGH = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Github
        </Tooltip>
    )

    return (
        <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' className='navBar'>
                <Container>
                    <Row className='navBar'>
                        <Col xs={12} className='p-1 text-center'>
                            <Navbar.Brand><Link to='/' className='brandName'>CR</Link></Navbar.Brand>
                        </Col>
                        <Col xs={12} className="p-2 d-flex text-center align-items-center pageLinks">
                            <Nav>
                                <Row xs={12}>
                                    <Col>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 100, hide: 200 }}
                                            overlay={renderTooltipAM}
                                            className='tooltip'
                                        >
                                            <Link className='links' to='/aboutme'><i className="bi bi-person iconResize"></i></Link>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col className='mt-3'>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 100, hide: 200 }}
                                            overlay={renderTooltipMW}
                                        >
                                            <Link className='links' to='/mywork'><i className="bi bi-image iconResize"></i></Link>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col className='mt-3'>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 100, hide: 200 }}
                                            overlay={renderTooltipCM}
                                        >
                                            <Link className='links' to='/contactme'><i className="bi bi-calendar iconResize"></i></Link>
                                        </OverlayTrigger>
                                    </Col>
                                    <Col className='mt-3'>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 100, hide: 200 }}
                                            overlay={renderTooltipR}
                                        >
                                            <Link className='links' to='/resume'><i className="bi bi-file-earmark-text iconResize"></i></Link>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Nav>
                        </Col>
                        <Col xs={12} className='p-2 text-center socials'>
                            <Row>
                                <Col>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 100, hide: 200 }}
                                        overlay={renderTooltipLI}
                                    >
                                        <a className='links' href='https://www.linkedin.com/in/charlie-rick-499a9120/'><i className="bi bi-linkedin iconResize"></i></a>
                                    </OverlayTrigger>
                                </Col>
                                <Col className='mt-3'>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 100, hide: 200 }}
                                        overlay={renderTooltipGH}
                                    >
                                        <a className='links' href='https://github.com/Cdjrick'><i className="bi bi-github iconResize"></i></a>
                                    </OverlayTrigger>
                                </Col>
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
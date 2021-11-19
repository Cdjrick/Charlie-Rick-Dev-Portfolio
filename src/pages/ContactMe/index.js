import { Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function ContactMe() {
    return (
        <>
            <Row className='contain mx-auto'>
                <Col xs={12} md={6} lg={4}>
                    <h1 className='text-center'>
                        Contact Me
                    </h1>
                    <p className='contactMe'>
                        If you wish to contact me about potential job opportunities, or freelance work, don't hesitate 
                        to use the form below or contact me directly using the information at the bottom of the page
                    </p>
                    <div className='text-center'>
                        <a className='links contact-links' href='https://www.linkedin.com/in/charlie-rick-499a9120/'><i className="bi bi-linkedin iconResize"></i></a>
                        <a className='links contact-links' href='https://github.com/Cdjrick'><i className="bi bi-github iconResize"></i></a>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='formInput' type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter a Message</Form.Label>
                            <Form.Control className='formInput' as="textarea" placeholder='Please Enter a Message' 
                            rows={3} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default ContactMe
import React, { useState } from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useForm } from "react-hook-form";

import './index.css'

function ContactMe() {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
    }

    return (
        <>
            <Row className='contain mx-auto'>
                <Col xs={12} md={6} lg={4}>
                    <h1 className='text-center'>
                        Contact Me
                    </h1>
                    <p className='contactMe'>
                        If you wish to contact me about potential job opportunities, or freelance work, don't hesitate
                        to use the form below, or email me directly using the email at the bottom of the page.
                    </p>
                    <div className='text-center'>
                        <a className='links contact-links' href='https://www.linkedin.com/in/charlie-rick-499a9120/'><i className='bi bi-linkedin iconResize'></i></a>
                        <a className='links contact-links' href='https://github.com/Cdjrick'><i className='bi bi-github iconResize'></i></a>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Form noValidate validated={validated} target='_blank' rel="noreferrer"  action='https://formsubmit.co/cdjrick@gmail.com' method='POST' onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control className='formInput nameInput' type='text' placeholder='Enter Name' name='Name' />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label className='formInputRequired'>Email address</Form.Label>
                            <Form.Control 
                                className='formInput' 
                                type='email' 
                                placeholder='Enter email' 
                                name='Email' 
                                required
                                aria-describedby='email-error'
                            />
                            <Form.Control.Feedback type='invalid'>Please provide a properly formatted email address</Form.Control.Feedback>
                            {/* <p class='error-message' id='email-error'>Please provide a properly formatted email address</p> */}
                            
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                            <Form.Label className='formInputRequired'>Enter a Message</Form.Label>
                            <Form.Control className='formInput' as='textarea' placeholder='Please Enter a Message'
                                rows={3} name='Message' required/>
                            <Form.Control.Feedback type='invalid'>Please provide a message</Form.Control.Feedback>
                        </Form.Group>
                        <Button className='submit' variant='dark' type='submit' >Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

// onSubmit={handleSubmit(onSubmit)}
// {...register('email', { 
//     required: 'Please enter your email', 
//     pattern: {
//         value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
//         message: 'Please enter a valid email'
//     } 
// })}
// {errors?.email && <p className='text-danger errorText'>{errors.email.message}</p>}
//disabled={errors?.email}

export default ContactMe
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function Resume() {

    const generalSkills = ['Github', 'Git', 'Jira', 'Agile']
    const developSkills = ['Html', 'CSS', 'Javascript', 'Handlebars', 'Bootstrap', 'React', 'NodeJS', 'ExpressJS', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'Apollo', 'GraphQL']
    const school = ['Carleton University Coding Bootcamp', 'Algonquin College Mobile App Design and Development']
    const work = ['Work 1', 'Work 2']

    return (
        <>
            <Container className='skillsContainer'>
                <Row>
                    <h3 className='text-center title'>Resume</h3>
                </Row>
                <Row className='containSkills text-center'>
                    <Col className='column' xs={12} lg={3}>
                        <h4>General Skills</h4>
                        <ul className='generalSkills p-0'>
                            {generalSkills.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col className='column' xs={12} lg={3}>
                        <h4>Development Skills</h4>
                        <ul className='developSkills p-0'>
                            {developSkills.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col className='column' xs={12} lg={3}>
                        <h4>Education</h4>
                        <ul className='p-0'>
                            {school.map(school => (
                                <li><br></br>{school}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col className='column' xs={12} lg={3}>
                        <h4>Work</h4>
                        <ul className='p-0'>
                            {work.map(work => (
                                <li>{work}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Row className='text-center inquiry'>
                    <p>If you would like access to my full resume, please send me an email on the contact page and I will get back to you asap</p>
                </Row>
            </Container>
        </>
    )
}

export default Resume
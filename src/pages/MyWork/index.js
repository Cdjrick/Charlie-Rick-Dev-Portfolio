import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function MyWork() {
    const myWork = [
        {
            title: 'fmarket',
            description: `I created the design and funtionality for the homepage, and single shop view, plus the design for the login/signup 
            screen for this collaboration react application project. Full application description plus a link to the deployed application provided in the README on the github 
            repository of this project`,
            img: './images/myWork/fmarket.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://github.com/askarrizvi/fmarket'
        },
        {
            title: 'furFoodz',
            description: `I created the front-end design for this collaboration application, I also provided support on the database. Full 
            application description plus a link to the deployed app is provided in the README on the github repository of this project`,
            img: './images/myWork/furfoodz.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://github.com/jackloveday-git/FurFoodz'
        },
        {
            title: 'Space Camp',
            description: `I created the front-end design of this collaboration project, full website description plus the link to the deployed 
            app is provided in the github repository of this project`,
            img: './images/myWork/spacecamp.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://github.com/jackloveday-git/space-camp'
        },
        {
            title: 'Budgeter',
            description: 'I created the PWA functionality to a project that tracks your budgets.',
            img: './images/myWork/budgeter.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://charlierickbudgeter.herokuapp.com/'
        },
        {
            title: 'Social Network API',
            description: 'I created the backend API for a social network project',
            img: './images/myWork/nosql-database.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://watch.screencastify.com/v/oE2rKsRiymDRAwWd0Mju'
        },
        {
            title: 'Employee Tracker',
            description: 'I created an SQL database with functionality to to view employees, departments, roles in a database, and allows them to add employees, departments, role.',
            img: './images/myWork/employee-tracker.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://drive.google.com/file/d/10tJ7vmrmLZ-imZpm2wx7IY2uafxmSqkd/view'
        },
        {
            title: 'Password Generator',
            description: 'I created a program that returns a randomized password with the criteria you provide',
            img: './images/myWork/password-generator.svg',
            school: 'Carleton University Coding Bootcamp',
            link: 'https://cdjrick.github.io/Charlie-Rick-Password-Generator/'
        },
    ]

    return (
        <>
            <Row className='experify mx-auto'>
                <Col xs={12} md={4} lg={3} xl={2} className='experifyOverlay text-center m-0 p-0'>
                    <a className='experifyLink' href='https://xd.adobe.com/view/a9666b78-72b9-4789-6cfe-22e29a43af11-df57/grid' target='_blank' rel="noreferrer">
                        <h4 className='title'>ExperifyHealth</h4>
                    </a>
                    <p className='description'>As part of a collaboration with 4 others we worked alongside a
                        real client to create a working prototype for something they wanted created. I was the primary
                        UI and UX designer on this project. Click the title to see the rest of the screens that were 
                        created, or contact me to see the working prototype.</p>
                    <p className='school'>Algonquin College</p>
                </Col>

                <img className='mx-auto experifyScreen' src='./images/myWork/Experify1.png' alt=''></img>
                <img className='mx-auto experifyScreen' src='./images/myWork/Experify2.png' alt=''></img>
                <img className='mx-auto experifyScreen' src='./images/myWork/Experify3.png' alt=''></img>
            </Row>
            <Row className='myWorkRow text-center' xs={12} lg={6}>
                {myWork.map(project => (
                    <Col xs={12} lg={6} className='contain mx-auto m-0 p-0'>
                        <a href={project.link} target='_blank' rel="noreferrer">
                            <Col x={12} lg={6} className='overlay text-center m-0 p-0'>
                                <h4 className='title'>{project.title}</h4>
                                <p className='description'>{project.description}</p>
                                <p className='school'>{project.school}</p>
                            </Col>
                            <img className='mywork mr-0' src={project.img} alt={project.title}></img>
                        </a>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MyWork
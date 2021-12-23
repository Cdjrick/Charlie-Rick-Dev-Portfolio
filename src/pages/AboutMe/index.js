import './index.css'

function AboutMe() {
    return (
        <>
            <div className='text-center'>
                <h2>About Me</h2>
                <img className='mx-auto' src='./images/headshot.svg' alt='Me'></img>
            </div>

            <div className='aboutMeContent mx-auto'>
                <p>
                    My Name is Charles Rick. I am currently looking for a career in the field of Front End Web Development, 
                    User Interface Design, or User Experience Design. 
                    I attended a 2 year course at Algonquin College for Mobile App Design and Development, and then a 6 
                    month Carleton University Coding Bootcamp. 
                    I also spent some time working as a QA tester for Magnifi.
                </p>

                <p>
                    Over this time I have obtained many important skills outlined on my resume, including but not limited to 
                    Jira, React, Handlebars, NodeJS, Express, Bootstrap, 
                    MongoDB, Mongoose, MySQL, UX Design and UI Design.
                </p>

                <p>
                    Please take a look at my portfolio to see projects I have created or worked on over the time I was in 
                    school. If you would like to contact me, fill out the 
                    contact form and I will respond as soon as possible.
                </p>
            </div>
        </>
    )
}

export default AboutMe
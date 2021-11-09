import './index.css'

function AboutMe() {
    return (
        <>
            <div className='text-center'>
                <h2>About Me</h2>
                <img className='mx-auto' src='/images/headshot.svg' alt='Me'></img>
            </div>

            <div className='content mx-auto'>
                <p>
                    My Name is Charlie Rick. I am currently looking for a job in the field of Front End Web Development, User Interface Design, or User Experience Design. 
                    I attended a 2 year course at Algonquin College for Mobile App Design and Development, and then a 6 month Carleton University Coding Bootcamp. 
                    I am also have some experience working as a QA Tester.
                </p>

                <p>
                    Over this time I have obtained many important skills outline on my resume, including but not limited to Jira, React, Handlebars, NodeJS, Express, Bootstrap, 
                    MongoDB, MySQL, UX Design.
                </p>

                <p>
                    Please take a look at my portfolio to see projects I have created or worked on over the time I was in school. If you would like to contact me, fill out the 
                    contact form and I will respond as soon as possible
                </p>
            </div>
        </>
    )
}

export default AboutMe
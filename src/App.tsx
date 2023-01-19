import './App.css';
import { ABOUTUS, BOARD, Project, PROJECTS } from './data';
import logo from './assets/ycs_black.png'

import email from './assets/email.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import people from './assets/people.jpeg'
import { SectionTitle } from './SectionTitle.component';
import { Fragment, ReactNode } from 'react';

type ProjectCardProps = {
    project: Project
}

type CardWrapperProps = {
    children: ReactNode
}

const CardWrapper = ({children}: CardWrapperProps) => (
    <div className='card'>
        {children}
    </div>
)

const ProjectCard = ({project}: ProjectCardProps) => (
    <CardWrapper>
        <div style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={project.image} alt={project.name} style={{ maxWidth: '150px', maxHeight: '150px', borderRadius: '15px' }}/>
        </div>
        <strong style={{ marginTop: '10px' }}>
            {project.name}
        </strong>
    </CardWrapper>
)

function App() {
    return (
        <div className="App">
            <div style={{ backgroundColor: '#1f232b' }}>
                <img src={logo} alt={"Yale Computer Society logo"} style={{ maxHeight: '200px' }} />
            </div>
            <div style={{ backgroundColor: '#1f232b', color: 'white', padding: '0 0 2rem 0', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <h3>Students promoting tech &amp; entrepreneurship at Yale University</h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ cursor: "pointer", border: "5px solid white", borderRadius: '15px', width: "fit-content", padding: '15px' }} onClick={() => window.open("https://yalecompsociety.us7.list-manage.com/subscribe/post?u=83b3abd7222875600c46cf8de&amp;id=155d6c54ff", "_blank")} >
                        Subscribe To Our Mailchimp
                    </div>
                </div>
            </div>
            <SectionTitle header='About Us' subheader='What We Do'/>
            <div className='card-grid'>
                {
                    ABOUTUS.map((about, i) => (
                        <CardWrapper key={i}>
                            <img src={about.icon} alt={about.name} style={{ width: '50px', height: '50px' }} />
                            <strong style={{ margin: '1rem 0' }}>{about.name}</strong>
                            <p>{about.description}</p>
                        </CardWrapper>
                    ))
                }
            </div>
            <SectionTitle header='Spring 2023 Development' subheader='Here is the software we are building to improve the Yale experience using technology!'/>
            <div className='card-grid'>
                {
                    PROJECTS.map((project, i) => (
                        <Fragment key={i}>
                            {
                                project.link ?
                                <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <ProjectCard project={project}/>
                                </a> :
                                <ProjectCard project={project}/>
                            }
                        </Fragment>
                    ))
                }
            </div>
            <SectionTitle header='Spring 2023 Board' subheader='Meet the people making this possible!'/>
            <div className="card-grid">
                {
                    BOARD.map((board_member, i) => (
                        <CardWrapper key={i}>
                            <img src={people} alt={board_member.name} style={{ width: '100%', maxWidth: '200px', marginBottom: '1rem', height: '100%', maxHeight: '200px' }}/>
                            <strong>{board_member.name}</strong>
                            <p>{board_member.role}</p>
                        </CardWrapper>
                    ))
                }
            </div>
            <footer style={{ backgroundColor: '#1f232b', padding: '15px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                <div>
                <a href="mailto:yalecomputersociety@gmail.com">
                    <img src={email} className="social-logo" style={{ marginRight: '10px' }} alt="Email"/>
                </a>
                <a href="https://www.facebook.com/yalecompsociety/" target="_blank" rel="noreferrer">
                    <img className="social-logo" style={{ margin: '0 10px' }} src={facebook} alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/yalecompsociety/" target="_blank" rel="noreferrer">
                    <img className="social-logo" style={{ marginLeft: '10px' }} src={instagram} alt="Instagram"/>
                </a>
                </div>
                <div style={{ marginTop: '5px' }}>
                    Copyright 2023
                </div>
            </footer>
        </div>
    );
}

export default App;

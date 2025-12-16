import React from 'react'
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
        <div className="projects__content">
            <h1 className="projects__title">Here are some of my <span className="text--blue">projects</span></h1>
            <ul className="projects__list">

                <li className="project">
                    <div className="project__wrapper">
                        <img src="/assets/Skinstric.png" className="snapshot" alt="summarist snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Skinstric Application</h3>
                            <h4 className="project__description__subtitle">HTML, CSS, Javascript, React, NextJS</h4>
                            <p className="project__description__para">
                               In this application, the user can enter their information and upload or take a photo. Once the information is submitted and the photo is uploaded, the API is called to analyze and display demographic information based on the photo.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/Skinstric-tim" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://skinstric-tim-rbnq.vercel.app/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src="/assets/summarist.png" className="snapshot" alt="summarist snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Summarist</h3>
                            <h4 className="project__description__subtitle">Next.js,Typescript, Service API, Firebase(firestore + authentication), Stripe using firebase extension, React icons, Vercel</h4>
                            <p className="project__description__para">A robust website that implement Frontend accelerator. Features include user creation
                                and authentication, guest sign in, ability to read, or listen a book. Ability to choose a plan to get accses to many amazing books to read, ability to add book to your library,
                                 and dynamic page updates.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/summarist-tim" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://summarist-tim.vercel.app/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src="/assets/netflix-clone img.png" className="snapshot" alt="netflix clone snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title"></h3>
                            <h4 className="project__description__subtitle">Next.js,Typescript, Service API, Firebase(firestore + authentication), Stripe using firebase extension, React icons, Vercel</h4>
                            <p className="project__description__para">A robust website that implement a replica of Netflix with a functioning login and signup screen as well as movie trailers. Features include user creation
                                and authentication, guest sign in.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/summarist-tim" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://summarist-tim.vercel.app/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/internshipsnapshot.PNG`} className="snapshot" alt="library snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Ultraverse</h3>
                            <h4 className="project__description__subtitle">React, JavaScript, Node.js, Git</h4>
                            <p className="project__description__para">The final product of my internship with Frontend Simplified. This internship
                                consisted of converting a static website into a dynamic application using various Node.js libraries such as Axios,
                                Owl Carousel, and Animate on Scroll. Maintained version control with repository branches and pull requests on github.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/TimTCHOUAMOU-Internship" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://tim-tchouamou-internship.vercel.app/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/librarysnapshot.PNG`} className="snapshot" alt="library snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Library</h3>
                            <h4 className="project__description__subtitle">HTML, JavaScript, CSS</h4>
                            <p className="project__description__para">Library is an E-commerce website mockup. The site offers 
                                a variety of features including multiple pages, dynamic routing, sorting options, a fully 
                                functional cart, and responsive design.</p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/sale-book" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://sale-book-eta.vercel.app" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/treact img.png`} className="snapshot" alt="mc snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Treact Clone</h3>
                            <h4 className="project__description__subtitle">HTML, JavaScript, CSS</h4>
                            <p className="project__description__para">This clone is a test of my ability to recreate
                                the landing page of another website. The clone includes the same assets, animations,
                                dynamic components, and responsive design as the original.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/MyFirstProject" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://my-first-project-rho-drab.vercel.app/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
             
            </ul>
        </div>
    </section>
  )
}

export default Projects;
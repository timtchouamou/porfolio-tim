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
                        <img src={`${process.env.PUBLIC_URL}/assets/internshipsnapshot.PNG`} className="snapshot" alt="summarist snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Summarist</h3>
                            <h4 className="project__description__subtitle">Next.js, Redux, Tailwind CSS, Service API, Firebase</h4>
                            <p className="project__description__para">A robust website that implement Frontend accelerator. Features include user creation
                                and authentication, guest sign in, ability to read, or listen a book. Ability to choose a plan to get accses to many amazing books to read, ability to add book to your library,
                                 and dynamic page updates.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/timtchouamou/summarist-inter-pro" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://summarist-inter-pro.vercel.app/" target="_blank" rel="noreferrer">
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
                        <img src={`${process.env.PUBLIC_URL}/assets/treactsnapshot.PNG`} className="snapshot" alt="mc snapshot"></img>
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
                {/* <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/breezesnapshot.PNG`} className="snapshot" alt="mc snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Breeze 2</h3>
                            <h4 className="project__description__subtitle">React, Google API, National Weather Service API</h4>
                            <p className="project__description__para">The second version of a simple weather app. The National 
                                Weather Service API provides data for any US domestic location. Features of this application include
                                location autocomplete suggestions, dynamic components, and responsive design.
                            </p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/DvdHLee/Breeze2" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://dvdhlee.github.io/Breeze2/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/mcsnapshot.png`} className="snapshot" alt="mc snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">Meal Chewser</h3>
                            <h4 className="project__description__subtitle">React, Google API</h4>
                            <p className="project__description__para">My first ever project! Meal Chewser is a random restaurant generator designed
                                to make deciding where to eat fun and stress free. All you have to do is
                                type in a location and some optional filters, and it will automatically choose a
                                restaurant for you.</p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/arizonaCoderz/meal-chewser" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://arizonacoderz.github.io/meal-chewser/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="project">
                    <div className="project__wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/moreorlesssnapshot.png`} className="snapshot" alt="more or less snapshot"></img>
                        <div className="project__description">
                            <h3 className="project__description__title">More or Less</h3>
                            <h4 className="project__description__subtitle">React, HTML, CSS, JavaScript</h4>
                            <p className="project__description__para">More or Less is a simple trivia game where you guess
                                "more" or "less" on a given numerical statement. You can play 5 rounds per day
                                and various statistics are logged automatically using local browser storage.</p>
                            <div className="project__description__links">
                                <div className="project__description__link">
                                    <a href="https://github.com/DvdHLee/Moreorless" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="project__description__link">
                                    <a href="https://dvdhlee.github.io/Moreorless/" target="_blank" rel="noreferrer">
                                        <i className="fas fa-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li> */}
            </ul>
        </div>
    </section>
  )
}

export default Projects;
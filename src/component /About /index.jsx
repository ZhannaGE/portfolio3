import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function About() {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-header">
                    <p className="about-header_title"><span className="white-color">About</span> me</p>
                    <span className="title-bg">Resume</span>
                </div>
                <div className="about-personal">
                    <div className="about-personal_info">
                        <p className="about-personal_title">PERSONAL INFOS</p>
                        <div className="about-personal_item">
                            <div className="about-personal_info1">
                                <ul>
                                    <li>First Name : <span className="bold-font">Steve</span></li>
                                    <li>Last Name : <span className="bold-font">Milner</span></li>
                                    <li>Age : <span className="bold-font">25 years</span></li>
                                    <li>Nationality : <span className="bold-font">Tunisian</span></li>
                                    <li>Freelance : <span className="bold-font">Available</span></li>
                                </ul>
                            </div>
                            <div className="about-personal_info2">
                                <ul>
                                    <li>Address : <span className="bold-font">Tunis</span></li>
                                    <li>Phone : <span className="bold-font">+21621184010</span></li>
                                    <li>Email : <span className="bold-font">you@mail.com</span></li>
                                    <li>Skype : <span className="bold-font">steve.milner</span></li>
                                    <li>Langages : <span className="bold-font">French, English</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-personal_column">
                        <div className="about-personal_column1 box">
                            <h3 className="">12</h3>
                            <p className="">years of <span className="d-block">experience</span></p>
                        </div>
                        <div className="about-personal_column2 box">
                            <h3 className="">97</h3>
                            <p className="">completed <span className="d-block">project</span></p>
                        </div>
                        <div className="about-personal_column3 box">
                            <h3 className="">81</h3>
                            <p className="">happy <span className="d-block">customers</span></p>
                        </div>
                        <div className="about-personal_column4 box">
                            <h3 className="">53</h3>
                            <p className="">awards<span className="d-block">won</span></p>
                        </div>
                    </div>
                </div>
                <hr className="separator"/>
                <div className="about-skills">
                    <p className="about-skills_title">MY SKILLS</p>
                    <div className="skills-columns">
                        <div className="skills-column1">
                            <div className="radius p25">
                                <span>25%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">HTML</h6>
                        </div>
                        <div className="skills-column2">
                            <div className="radius p89">
                                <span>89%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">JAVASCRIPT</h6>
                        </div>
                        <div className="skills-column3">
                            <div className="radius p70">
                                <span>70%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">CSS</h6>
                        </div>
                        <div className="skills-column4">
                            <div className="radius p66">
                                <span>66%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">PHP</h6>
                        </div>
                        <div className="skills-column5">
                            <div className="radius p95">
                                <span>95%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">WORDPRESS</h6>
                        </div>
                        <div className="skills-column6">
                            <div className="radius p50">
                                <span>50%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">JQUERY</h6>
                        </div>
                        <div className="skills-column7">
                            <div className="radius p35">
                                <span>35%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">ANGULAR</h6>
                        </div>
                        <div className="skills-column8">
                            <div className="radius p45">
                                <span>45%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <h6 className="lang">REACT</h6>
                        </div>
                    </div>
                </div>
                <hr className="separator"/>
                <div className="about-education">
                    <h3 className="about-education_title">EXPERIENCE & EDUCATION</h3>
                    <div className="about-education_flex">
                        <div className="about-education_item1">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2018 - Present</span>
                                        <h5>Web Developer Envato</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
                                            adipisicing elit, </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2013 - 2018</span>
                                        <h5>UI/UX Designer Themeforest</h5>
                                        <p>Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit,
                                            tempor
                                            incididunt</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2005 - 2013</span>
                                        <h5>Consultant Videohive</h5>
                                        <p>Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed
                                            do eiusmod
                                            tempor
                                            duntt</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-education_item2">
                            <div className="resume-box">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2015</span>
                                        <h5>Engineering Degree Oxford University</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor
                                            incididunt ut
                                            labore</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2012</span>
                                        <h5>Master Degree Kiev University</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
                                            incididunt ut
                                            adipisicing</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faBriefcase} />
                                        </div>
                                        <span className="time">2009</span>
                                        <h5>Bachelor Degree Tunis High School</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor ut labore</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen,faComments} from '@fortawesome/free-solid-svg-icons';


function Aside() {
    return(
        <div>
            <aside className="aside-nav">
                <ul className="icon-menu">
                    <li className="icon-box active">
                        <a>
                            <FontAwesomeIcon icon={faHome}/>
                            <h2>Home</h2>
                        </a>
                    </li>
                    <li className="icon-box">
                        <a href="about.html">
                            <FontAwesomeIcon icon={faUser}/>
                            <h2>About</h2>
                        </a>
                    </li>
                    <li className="icon-box">
                        <a href="portfolio.html">
                            <FontAwesomeIcon icon={faBriefcase}/>
                            <h2>Portfolio</h2>
                        </a>
                    </li>
                    <li className="icon-box">
                        <a href="contact.html">
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <h2>Contact</h2>
                        </a>
                    </li>
                    <li className="icon-box">
                        <a href="contact.html">
                            <FontAwesomeIcon icon={faComments}/>
                            <h2>Blog</h2>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Aside;
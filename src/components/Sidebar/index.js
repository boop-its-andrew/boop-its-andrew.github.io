import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle, faHome, faMale, faSignature} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () =>  (
    <div className = 'nav-bar'>
        
        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink exact = "true" activeclassname = "active" className = "hangman-link" to ="/hangman">
                <FontAwesomeIcon icon = {faMale} color = "#4d4d4e" />
            </NavLink>  
            <NavLink exact = "true" activeclassname = "active" className = "spRhyming-link" to ="/singleplayerRhyming">
                <FontAwesomeIcon icon = {faSignature} color = "#4d4d4e" />
            </NavLink>  
            <NavLink exact = "true" activeclassname = "active" className = "about-link" to ="/about">
                <FontAwesomeIcon icon = {faInfoCircle} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target = "_blank"
                rel = "noreferrer"
                href = "https://www.linkedin.com/in/sebin-gil-86a296210"
                >
                    <FontAwesomeIcon icon = {faLinkedin} colors = '#4d4d4e' />

                </a>
                <a
                target = "_blank"
                rel = "noreferrer"
                href = "https://www.github.com/andrew-gil"
                >
                    <FontAwesomeIcon icon = {faGithub} colors = '#4d4d4e' />

                </a>
            </li>
        </ul>
    </div>
)

/*
<Link className = 'logo' to = '/'>
            <img src ={LogoS} alt ="logo" />
            <img className = 'sub-logo' src ={LogoSubtitle} alt ="slobodan" />
        </Link>
*/

export default Sidebar;
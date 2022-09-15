import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
//import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass] = useState('text-animate');
    const welcomeArray = ['G', 'e', 't', ' ', 'b', 'e', 't', 't', 'e', 'r', ' ', 'a', 't', ' ', 'r', 'e', 'a', 'd', 'i', 'n', 'g', '!'];
    const playArray = ['P', 'l', 'a', 'y', ' ', 'f', 'u', 'n', ' ', 'g', 'a', 'm', 'e', 's', ',', ' ', 'e', 'a', 'r', 'n', ' ', 'p', 'o', 'i', 'n', 't', 's', ',',' ', 'a', 'n','d',' ','l','e','v','e','l',' ','u','p','!'];
    //const getArray = ['G', 'e', 't'];
    //const betterArray = ['b', 'e', 't', 't', 'e', 'r'];
    //const atArray = ['a', 't'];
    //const readingArray = ['r', 'e', 'a', 'd', 'i', 'n', 'g', '!'];

    return (
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {welcomeArray}
                idx = {11} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {playArray}
                idx = {33} />
                </h1>
                <Link to= '/hangman' id = 'hangman' className = 'flat-button'>PHONEMIC {<br/>}HANGMAN</Link>
                <Link to= '/singleplayerRhyming' id = 'sprhyming'className = 'flat-button'>SINGLEPLAYER {<br/>}RHYMING</Link>
                <Link to= '#' id = 'mprhyming'className = 'flat-button'>MULTIPLAYER {<br/>}RHYMING</Link>
            </div>
        </div>
    );
}
//<Link to= '#' className = 'flat-button'>HANGMAN LEVEL 3</Link>
/*
<Link to= '/contact' className = 'flat-button'>CONTACT ME</Link>

                <span className = {letterClass}>H</span>
                <span className = {`${letterClass} _12`}>i,</span>
                <br />
                <span className = {`${letterClass} _13`}>I</span>
                <span className = {`${letterClass} _14`}>'m,</span>
                <img src = {LogoTitle} alt = "developer" />

const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
    
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e','v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];


<h1>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {getArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {betterArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {atArray}
                idx = {10} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {readingArray}
                idx = {10} />
                </h1>
 */
export default Home; 
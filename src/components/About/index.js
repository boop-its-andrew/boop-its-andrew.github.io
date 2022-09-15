import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';



/*
Currently have a problem that has two solutions
Problem: website is not scrollable.
Solution: Make scrollable. the problem with this is the sidebar is not designed to be scrollable, and neither is the body,
and both will have to be reformatted so that it is. The sidebar must be made sticky, and the body must be accomadating of scrolling,
which idk how. The alternative to changing every page's body is to make only the about page scrollable, which will be researched.
However, that still requires a sticky sidebar which i cannot figure out atm

Solution: Make multiple pages within the about page. The best and cleanest way to do this is to attach paragraphs to header texts
and allow the user to click headers and expand them, so that the paragraph is animated on and the other headers are animated away.
You also have to animate the pargraphs off the screen when clicking a new header to read the info on them.
*/


const About = () => {
    const [letterClass] = useState('text-animate');
    const welcomeArray = ['A', 'b', 'o', 'u', 't', ' ', 't', 'h', 'i', 's', ' ', 'w', 'e', 'b', 's', 'i', 't', 'e'];
    
    return (
        <div className = 'container home-page'>
            <div id = 'movetxt'>
                <h2>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {welcomeArray}
                idx = {11} />
                </h2>
            </div>
            <div>
                <p>
                    A number of research studies have shown that children identified as at risk for reading failure at a young age, usually by kindergarten and first grade, 
                    can develop proficient reading skills if taught effectively. The purpose of this website is to make available a scientifically informed education program by which
                    children at risk for reading disability can improve their reading capabilities and keep up with their peers in the classroom, regardless of a deficient education
                    in school or interruptions in education throughout young age.
                    <br />
                    <br />
                    While a single intervention program is not equally effective for all at risk children, and this website is by no means a replacement for effectual classroom instruction,
                    these games offer a fun and enticing way to work on reading outside of school. A points system will be included so parents may track their children's progress with these games,
                    and rewards are recommended so that children will want to play with it more. Furthermore, this website is not just for children! While early intervention is the best way
                    to treat reading disabilities, anybody of any age can use these to improve their reading, particularly people who struggle with dyslexia. A ladder system is being worked on
                    so adults can compete online and have fun raising their elo and trying to reach the top of the ladder.
                    <br />
                    <br />
                    These games are designed based on existing scientifically informed treatments. Each game will be explained below, and all sources used to inform these games will be cited.
                </p>
                <h3>
                    Phonemic Hangman
                </h3>
                <p>
                    This game is derived from the treatment model used in "An examination of phonological awareness treatment outcomes for seventh grade poor readers from a bilingual community"
                    (Teri J Swanson, Barbara W. Hodson, Marlene Schommer-Aikins, 2005). This game is targeted at children who read at a kindergarten to 2nd grade level, and enforces
                    phonemic encoding and decoding abilities. In other words, it enforces sound-letter assocation, and stimulates phonological awareness, which is the most important 
                    ability in regards to literacy (Jason L Anthony, David J Francis, 2005).
                </p>
                <h3>
                    Single Player Rhyming
                </h3>
                <p>
                    Phonological awareness is the most important ability in regards to literacy, proven in nearly every study regarding this topic. It is also the skill that is 
                    most deficient in young poor readers (Teri J Swanson, Barbara W. Hodson, Marlene Schommer-Aikins, 2005). Among the abilities
                    encompassed by phonological awareness are phoneme deletion, phonemic awareness, and rhyming (G. Reid Lyon, 2003). Rhyming requires the ability to manipulate
                    sounds, which is an effective way to stimulate phonological awareness. The difficulty level of rhyming depends on various factors, such as how many words rhyme
                    with the word you are trying to rhyme, the manner of articulation, the type of consonants, vowel and consonant harmony, and more. 
                    <br />
                    <br />
                    This game utilizes the Datamuse API to determine if a word rhymes.
                </p>
                <h3>
                    Sources
                </h3>
                <p>
                    Lyon, G. R. (1995). Toward a definition of dyslexia. Annals of Dyslexia, 45(1), 1-27. https://doi.org/10.1007/bf02648210
                    <br />
                    Lyon, G. R., Shaywitz, S. E., & Shaywitz, B. A. (2003). A definition of dyslexia. Annals of Dyslexia, 53(1), 1-14. https://doi.org/10.1007/s11881-003-0001-9
                    <br />
                    Anthony, J. L., & Francis, D. J. (2005). Development of Phonological Awareness. Current Directions in Psychological Science, 14(5), 255–259. https://doi.org/10.1111/j.0963-7214.2005.00376.x
                    <br />
                    Huang, F. L. (2014). Using a Bifactor Model to Assess the Factor Structure of the Phonological Awareness Literacy Screening for Grades 1 Through 3. Journal of Psychoeducational Assessment, 32(7), 638–650. https://doi.org/10.1177/0734282914525026
                    <br />
                    Swanson, T. J., Hodson, B. W., & Schommer-Aikins, M. (2005). An Examination of Phonological Awareness Treatment Outcomes for Seventh-Grade Poor Readers From a Bilingual Community. Language, Speech, and Hearing Services in Schools, 36(4), 336–345. https://doi.org/10.1044/0161-1461(2005/033)
                </p>
            </div>
        </div>
    );
}

export default About;
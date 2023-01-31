import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LogoM from '../../assets/images/mcgill-university-logo.png'
import Logotele from '../../assets/images/Telefonica-logo.png'
import LogoML from '../../assets/images/Machine-learning.png'
import LogoAI from '../../assets/images/ai-logo.png'
import LogoMicro from '../../assets/images/logo-microprocessor.png'




const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [pageRefreshed, setPageRefreshed] = useState(false);
  
  useEffect(() => {
    if (!pageRefreshed) {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
        setPageRefreshed(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{  fontSize : "18px"}}>
          I am a fourth-year Computer Engineering student at McGill University, with  analytical, teamwork, leadership, and critical  thinking skills.
          </p>
          <p align="LEFT" style={{  fontSize : "18px"}}>
          I am currently in my final year, and my thesis is focused on natural language dialog generation for conversational agents tailored to avatar therapy for schizophrenia.
          </p>
          <p style={{  fontSize : "18px"}}>
          In terms of professional experience, I have had the opportunity to work as an intern in the field of big data and business intelligence. During my internship at Montevideo, I developed skills in Qlik Sense script development, SQL Server Integration Services (SSIS), Microsoft SQL Server, and API management.
          </p>
          <p style={{  fontSize : "18px"}}>
          Prior to that, I also worked as an enterprise IT support at Indutop S.A in Montevideo, where I managed hardware inventory databases, troubleshot in the field at over 70 international stores, set up PC's software, and worked with AI and database management.
          </p>
          <p style={{  fontSize : "18px"}}>
          My education background in computer engineering has provided me with a solid foundation in various fields including Artificial Intelligence, Applied Machine Learning, Microprocessors, Digital Systems, Software Engineering Practice, Algorithms and Data Structures, Intro to Software Development, Intro to Computer Science, Model-Based Programming, Intro to Software Engineering, Computer Organization, Discrete Structures, Operating Systems, and Machine Learning.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src={LogoM} alt="Logo"/>
            </div>
            <div className="face2">
            <img src={Logotele} alt="Logo"/>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <img src={LogoMicro} alt="Logo"/>
            </div>
            <div className="face5">
              <img src={LogoAI} alt="Logo"/>
            </div>
            <div className="face6">
              <img src={LogoML} alt="Logo"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

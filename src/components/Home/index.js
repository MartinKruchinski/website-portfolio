import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoM from '../../assets/images/logo-m.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [pageRefreshed, setPageRefreshed] = useState(false);
  const nameArray = [' ','M', 'a', 'r', 't', 'i','n']
  const jobArray = [
    'C',
    'o',
    'm',
    'p',
    'u',
    't',
    'e',
    'r',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    'i',
    'n',
    'g',
    ' ',
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't'
  ]

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
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>McGill University / Montreal</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img src={LogoM} alt="Logo"/>
      </div>
    </>
  )
}

export default Home
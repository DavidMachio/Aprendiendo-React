
import { useState } from 'react'

import './App.css'
import { CV } from './cv/cv';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Languages from './components/More/Languages/Languages';
import Volunteer from './components/More/Volunteer/Volunteer';
import Skills from './components/More/Skills/Skills';
const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  
  return (
  <>
    <Hero hero={hero}/>
    <div className="divider">
      <div className="line"></div>
      <h4 className='card'>About</h4>
      <div className='line'></div>
    </div>
    <About hero={hero}/>
    <div className="buttons">
    <button
    className="custom-btn btn-4"
    onClick={() => setShowEducation(true)}>Education</button>
    <button
    className="custom-btn btn-4"
    onClick={() => setShowEducation(false)}>Experience</button>
    </div>
    <div>
      {showEducation === true ? (
        <Education education={education} />
      ):(
        <Experience experience={experience}/>
      )}
    </div>
    <div className="divider">
      <div className="line"></div>
      <h4 className='card'>Languages</h4>
      <div className='line'></div>
    </div>
    <Languages languages={languages}/>
    <div className="divider">
      <div className="line"></div>
      <h4 className='card'>Skills</h4>
      <div className='line'></div>
    </div>
    <Skills habilities={habilities}/>
    <div className="divider">
      <div className="line"></div>
      <h4 className='card'>Volunteer</h4>
      <div className='line'></div>
    </div>
    <Volunteer volunteer={volunteer}/>
    </>
  );
};

export default App;


import { useState } from 'react'

import './App.css'
import { CV } from './cv/cv'
import Hero from './components/Hero/Hero';
const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  
  return (
    <Hero hero={hero}/>
  );
};

export default App;

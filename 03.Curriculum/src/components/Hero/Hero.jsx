import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="herocontainer">
      
    <img src="ironletters.png" className="imgheader"/>
    <div className="hero">
      <img className="photo" src ={hero.image} alt={hero.name}/>
      <div className=" name card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🗺️ {hero.city}</p>
        <p>📅 {hero.birthDate}</p>
        <p>✉️ <a href={"mailto:" + hero.email}>tony@starkindustries.com</a></p>
        <p>💾 <a href={hero.gitHub}>GitHub</a></p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
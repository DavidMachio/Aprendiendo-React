import React from "react";
import "./Experience.css"

const Experience = ({experience}) => {
  return (
    <div>
      <div className="experience card">
        {experience.map((item)=> {
          return(
            <div key={JSON.stringify(item)} class="experiencetext">
              <h3 class="exname">{item.name}</h3>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.decription}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Experience;
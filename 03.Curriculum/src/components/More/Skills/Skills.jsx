import React from "react";
import "./Skills.css"

const Skills = ({habilities}) => {
  return (
    <div>
      <div className="experience card">
        {habilities.map((item)=> {
          return(
            <div key={JSON.stringify(item)} class="experiencetext">
              <h3 class="exname">{item.name}</h3>
              <p>{item}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Skills;
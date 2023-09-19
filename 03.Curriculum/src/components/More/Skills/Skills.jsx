import React from "react";
import "./Skills.css"

const Skills = ({habilities}) => {
  return (
    <div>
      <div className="experience card">
        {habilities.map((item)=> {
          return(
            <div key={JSON.stringify(item)} className="experiencetext">
              <h3 className="exname">{item.name}</h3>
              <p>{item}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Skills;
import React from "react";
import "./Volunteer.css"

const Volunteer = ({volunteer}) => {
  return (
    <div>
      <div className="volunteer card">
        {volunteer.map((item)=> {
          return(
            <div key={JSON.stringify(item)}>
              <h3>{item.name}</h3>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Volunteer;
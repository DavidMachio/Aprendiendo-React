import React from "react";
import "./Languages.css"

const Languages = ({languages}) => {
  return (
    <div className="languages card">
        <p>{languages.language}</p>
        <p>✏️ Writing {languages.wrlevel}</p>
        <p>💬 Speaking {languages.splevel}</p>
    </div>
  )
}

export default Languages;
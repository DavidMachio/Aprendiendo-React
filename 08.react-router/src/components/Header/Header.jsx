import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {

  return (

    <header className="header">
      <NavLink to="/"><h1>OnBike</h1></NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bikes">Bikes</NavLink>
            </li>
          <li>
            <NavLink to="/about">About</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
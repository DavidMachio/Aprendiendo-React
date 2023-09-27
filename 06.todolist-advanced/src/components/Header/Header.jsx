
import { useState } from "react"
import "./Header.css"

const Header = ({hidden}) => {
  const [ menu , setMenu ] = useState (false)

  const toggleMenu = () => {
    setMenu( !menu )
  }

  return (
    <header className="header">
      <img src="./icononike.png" className="header-logo"/>

      <button onClick={ toggleMenu }
      className="header-button">
        <img src="./menu.png"/>
      </button>

      <nav className={`header-nav ${ menu ? 'Active' : '' }` }>
        <ul className="header-ul">
          <li className="header-li"><a href="#null" className="header-a">Hombre</a></li>
          <li className="header-li"><a href="#null" className="header-a">Mujer</a></li>
          <li className="header-li"><a href="#null" className="header-a">Ofertas</a></li>
          <li className="header-li"><a href="#null" className="header-a"><img src="./perfil.png"/></a></li>
          <li className="header-li"><button className="header-a cesta" onClick={hidden}><img src="./cesta.png"/></button></li>
        </ul>
      </nav>


      
    </header>
  )
}
export default Header;
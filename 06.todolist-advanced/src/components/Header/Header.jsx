
import "./Header.css"



const Header = () => {
  return (
    <header>
      <img src="./public/icononike.png"/>
      <button className="abrir-menu">Abrir</button>
      <nav className= "nav">
      <button className="cerrar-menu" id="cerrar">Cerrar</button>
        <ul className="nav-list">
          <li><a href="#null">Hombre</a></li>
          <li><a href="#null">Mujer</a></li>
          <li><a href="#null">Ofertas</a></li>
          <button>Perfil</button>
          <button>Cesta</button>
        </ul>
        </nav>
    </header>
  )
}

export default Header;
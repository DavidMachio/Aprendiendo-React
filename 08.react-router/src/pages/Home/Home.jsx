import { NavLink } from "react-router-dom";
import "./Home.css"

const Home = () => {

  return (
  <main className="home">
    <div className="texttitle">
      <h2>DISCOVER</h2>
      <h1>YOUR PASSION</h1>
      <h3>Live your dreams</h3>
      <NavLink to="/bikes"><button>see more</button></NavLink>
    </div>
    <img src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw61039283/images/plp/road-bikes/World-canyon-road-my23-01.jpg?sw=1920"/>
    
  </main>
  )
}

export default Home;
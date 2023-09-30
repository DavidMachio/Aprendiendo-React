import "./Bikes.css"
import { bikes } from "../../data/data";
import { NavLink } from "react-router-dom";

const Bikes = () => {

  return (
    <main className="bikes">
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <NavLink to={`/bikes/${bike.modelo}`}>
              <img 
              src={bike.img} 
              alt={bike.modelo}/>
              <h2>{bike.modelo}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Bikes;
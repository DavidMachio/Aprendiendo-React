import "./BikesDetail.css"
import { getBikes } from "../../data/data";
import { NavLink, useParams} from "react-router-dom";

const BikeDetail = () => {
  const { modelo } = useParams();
  const bike = getBikes(modelo)

  if (!bike) {
    return (
      <main>
        <h2>Articulo no encontrado</h2>
      </main>
    );
  } else {
    return(
      <main className="details">
        <div>
          <NavLink to="/bikes"><button className="previo">⬅</button></NavLink>
        </div>
        <div className="title">
          <h1>{bike.marca}</h1>
          <img src={bike.img}/>
      </div>
      <section>
        <div className="descriptions">
          <h2>{bike.modelo} - {bike.año} - {bike.precio} €</h2>
          <p>{bike.description}</p>
        </div>
        <div className="photos">
          <img src={bike.img2}/>
         <img src={bike.img3}/>
        </div>
      </section>
      </main>
    )
  }
};

export default BikeDetail;
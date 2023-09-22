import "./Main.css"
import dinosaurios from "../../data/data"
import { useState } from "react"
useState

const Main = () => {
const [dinosauriosList, setDinosaurios] = useState(dinosaurios);

const filterDinosaurios = (word) => {
  const newDinosauriosList = dinosaurios.filter((dino) => 
  dino.nombre.toLowerCase().includes(word.toLowerCase()) ||
  dino.localizacion.toLowerCase().includes(word.toLowerCase())
  );
  setDinosaurios(newDinosauriosList);
}
  return (
    <main>
      <input type="text" onInput={(ev) => filterDinosaurios(ev.target.value)} placeholder="Busca tu Dino..."/>
      <p>{dinosauriosList.length} resultados</p>
    <div className="contenedor">
    <ul className="card">
      {dinosauriosList.map((dino)=> (
      <li key={dino.id}>
        <img src={dino.img}/>
        <h3>{dino.nombre}</h3>
        <h4>{dino.localizacion}</h4>
      </li>))}
    </ul>
    </div>
    </main>
  )
}
export default Main;
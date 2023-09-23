import "./Gallery.css"
import nikeshoes from "../../data/data";
import { useState } from "react";

const Gallery = () => {
  const [shoe, setShoe] = useState([]);
  const [totalShoes, setTotalShoes] = useState(0);
  const [items, setItems] = useState(nikeshoes);

  const calcularTotal = () => {
    const total = shoe.reduce((acc, item)=> acc + item.price, 0);
  };

  const addItem = (item) =>{
    setShoe([...shoe, item]);
    setTotalShoes(totalShoes + item.price)
  };

  const filtrarShoes = (palabra) => {
    const nuevosNikeshoes=nikeshoes.filter((item)=>
    item.model.toLowerCase().includes(palabra.toLowerCase())
    );
    setItems(nuevosNikeshoes);
  };

  return (
  <main>
    <section className="cart">
      <h3>Mi carrito</h3>
      <ol>
        {shoe.map((item) => 
        <section className="sectioncard">
        <container className="carrito-card">
          <img src={item.img}/>

        <div>
          <li>{item.model}</li>
          <li>{item.price} €</li>
        </div>
        </container>
        <span className="divider"></span>
        </section>
        )}
      </ol>
      <h3>{shoe.length} Articulos</h3>
      <h3>Total: {totalShoes} €</h3>
    </section>
    <input type="text" 
    placeholder="search shoe..." onInput={(ev) => filtrarShoes(ev.target.value)}/>
    <ul>
      {items.map((shoe)=> (
      <li key={shoe.id}>
        <img src={shoe.img} alt={shoe.model}/>
        <div className="infoshoe">
          <span>
        <h4>{shoe.model}</h4>
        <h5>{shoe.type}</h5>
        <p>{shoe.price} €</p>
        </span>
        <button onClick={() => addItem(shoe)}>Add</button>
        </div>
      </li>

      ))}
    </ul>
  </main>
)}

export default Gallery;
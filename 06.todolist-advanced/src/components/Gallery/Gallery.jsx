import "./Gallery.css"
import nikeshoes from "../../data/data";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import Articulos from "../Articulos/Articulos";

const Gallery = () => {
  const [shoe, setShoe] = useState([]);
  const [totalShoes, setTotalShoes] = useState(0);
  const [items, setItems] = useState(nikeshoes);

  

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
    <Cart shoe={shoe} totalShoes={totalShoes}/>
    <Search filtrarShoes={filtrarShoes}/>
    <Articulos items={items} addItem={addItem}/>
  </main>
)}

export default Gallery;
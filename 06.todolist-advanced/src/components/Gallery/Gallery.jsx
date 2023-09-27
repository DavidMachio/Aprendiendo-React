import "./Gallery.css"
import nikeshoes from "../../data/data";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import Articulos from "../Articulos/Articulos";

const Gallery = ({change}) => {
  const [shoe, setShoe] = useState([]);
  const [totalShoes, setTotalShoes] = useState(0);
  const [items, setItems] = useState(nikeshoes);


  

  const addItem = (item) =>{
    setShoe([...shoe, {...item, _id:uuidv4()}]);
    setTotalShoes(totalShoes + item.price)
    console.log(shoe)
  };

  const filtrarShoes = (palabra) => {
    const nuevosNikeshoes=nikeshoes.filter((item)=>
    item.model.toLowerCase().includes(palabra.toLowerCase()) || 
    item.brand.toLowerCase().includes(palabra.toLowerCase())
    );
    setItems(nuevosNikeshoes);
  };
  return (
  <main>
    <Cart shoe={shoe} totalShoes={totalShoes} setShoe={setShoe} setTotalShoes={setTotalShoes} change2={change}/>
    <Search action={filtrarShoes}/>
    <Articulos items={items} addItem={addItem}/>
  </main>
)}

export default Gallery;
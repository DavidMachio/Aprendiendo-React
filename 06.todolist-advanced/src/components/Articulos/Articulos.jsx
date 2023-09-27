import "./Articulos.css"
const Articulos = ({items, addItem}) => {
  return (
    <ul>
      {items.length ? items.map((shoe)=> (
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

      )) : <p>Lo sentimos...</p>}
    </ul>
  )
}
export default Articulos;
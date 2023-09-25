import "./Cart.css"

const Cart = ({shoe, totalShoes}) => {
  return (
    <section className="cart Active">
      <h3>Mi carrito</h3>
      <ol>
        {shoe.map((item) => 
        <section className="sectioncard" key={item.id}>
        <container className="carrito-card">
          <img src={item.img} alt={item.model}/>
        <div>
          <li>{item.model}</li>
          <li>{item.price} €</li>
        </div>
        </container>
        <span className="divider"></span>
        </section>
        )}
      </ol>
      <h3>Articulos {shoe.length}</h3>
      <h3>Total: {totalShoes} €</h3>
    </section>
  )
}

export default Cart;
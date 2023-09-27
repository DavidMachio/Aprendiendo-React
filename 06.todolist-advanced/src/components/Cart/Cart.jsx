import "./Cart.css"

const Cart = ({shoe, totalShoes, setShoe, setTotalShoes}) => {

  const deleteShoe = (id) => {
    const newNumberShoes = shoe.filter((item) => item.id !== id )
    setShoe(newNumberShoes);
    const newPrice = newNumberShoes.reduce((total, item)=> total + item.price, 0);
    setTotalShoes(newPrice)



  }


  return (
    <section className="cart Active">
      <h3>Mi carrito</h3>
      <ol>
        {shoe.map((item) => 
        <section className="sectioncard" key={item.id}>
        <article className="carrito-card">
          <img src={item.img} alt={item.model}/>
        <div>
          <li>{item.model}</li>
          <li>{item.price} €</li>
        </div>
        <button className="delete" onClick={() => deleteShoe(item.id)}>x</button>
        </article>
        <div className="divider"></div>
        
        </section>
        )}
      </ol>
      <ol className="totales">
      <h3>Articulos {shoe.length}</h3>
      <h3>Total: {totalShoes} €</h3>
      </ol>
      <button className="comprar">Realizar pedido</button>
    </section>
  )
}

export default Cart;
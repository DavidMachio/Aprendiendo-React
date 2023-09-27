import "./Cart.css"

const Cart = ({shoe, totalShoes, setShoe, setTotalShoes, change2}) => {

  const deleteShoe = (_id) => {
    const newNumberShoes = shoe.filter((item) => item._id !== _id )
    setShoe(newNumberShoes);
    const newPrice = newNumberShoes.reduce((total, item)=> total + item.price, 0);
    setTotalShoes(newPrice)



  }


  return (
    <section className={change2 ? " cart Inactive" :"cart" }>
      <h3>Mi carrito</h3>
      {shoe.length === 0 ? <p className="empty">Tu carrito está vacío</p> : (
        <>
        <ol>
        {shoe.map((item) => 
        <section className="sectioncard" key={item._id}>
        <article className="carrito-card">
          <img src={item.img} alt={item.model}/>
        <div>
          <li>{item.model}</li>
          <li>{item.price} €</li>
        </div>
        <button className="delete" onClick={() => deleteShoe(item._id)}>x</button>
        </article>
        <div className="divider"></div>
        
        </section>
        )}
      </ol>
      <ol className="totales">
      <h3>Articulos {shoe.length}</h3>
      <h3>Total: {totalShoes} €</h3>
      </ol>
      </>
      )}
      <button className="comprar">Realizar pedido</button>
    </section>
  )
}

export default Cart;
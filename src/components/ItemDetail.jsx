import React from "react"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ detalle }) => {
  // const contexto = useContext(CartContext)
  // console.log(contexto)

  //destructury o algo asi
  const { cart, addItem } = useContext(CartContext)
  console.log(cart)

  //sigo la activida a raja tabla
  // const [quantityAdded, setQUantityAdded]= useState(0)

  // const onAdd = (cantidad)=> {
  //   console.log(`Agregaste ${cantidad} al carrito`)
  //   setQUantityAdded(cantidad)
  //   addItem(detalle,cantidad)
  //   console.log(quantityAdded, 'adentro ')
  // }
  // console.log(quantityAdded, 'afuera ')

  //recomendacion mia
  const [purchase, setPurchase] = useState(false)
  console.log(cart)

  //recomendacion mia
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`)
    setPurchase(true)
    addItem(detalle, cantidad)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "0 0 300px" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
          src={detalle?.img}
          alt={detalle?.name}
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "rgba(170, 159, 128, 0.9)",
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{detalle.name}</h1>

        <p style={{ margin: 0 }}>{detalle.description}</p>

        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
          ${detalle.price},00
        </p>

        <p style={{ margin: 0 }}>Stock disponible: {detalle?.stock}</p>
        {/* sigo tal cual la consigna */}
        {/* {quantityAdded !== 0 ? <button className='btn btn-dark'>Terminar compra</button> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>} */}
        {purchase ? (
          <Link className="btn btn-dark" to="/cart">
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={detalle.stock} onAdd={onAdd} />
        )}

        {/* <ItemCount stock={detalle?.stock} onAdd={onAdd} /> */}
      </div>
    </div>
  )
}

export default ItemDetail

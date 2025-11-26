import React from "react"
import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(138, 134, 143, 0.8)",
        display: "flex",
        flexDirection: "column", // para que queden uno abajo del otro
        alignItems: "center", // centra horizontalmente
        justifyContent: "center", // centra verticalmente si hay altura
        width: "600px", // ancho fijo
        padding: "2rem", // espacio interno
        margin: "0 auto", // centrar horizontal
        borderRadius: "0.5rem",
        fontFamily: "Dancing Script",
      }}
    >
      {" "}
      <h1>Carrito vacio</h1>
      <h3> Te invitamos a ver nuestros productos</h3>
      <Link className="btn btn-dark" to="/category/estante">
        Ver productos
      </Link>
    </div>
  )
}

export default EmptyCart

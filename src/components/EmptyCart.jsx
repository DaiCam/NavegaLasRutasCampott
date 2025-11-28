import React from "react"
import { Link } from "react-router-dom"
import "../css/EmptyCart.css"

const EmptyCart = () => {
  return (
    <div className="form-container">
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

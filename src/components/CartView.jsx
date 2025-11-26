import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import "../css/CartView.css"
import { FaShoppingCart } from "react-icons/fa"

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext)
  return (
    <div
      style={{
        backgroundColor: "rgb(206, 206, 211, 0.2)",
        paddingBottom: "1rem",
        width: "60%", // define un ancho
        margin: "0 auto", // centra horizontalmente
        borderRadius: "6px",
      }}
    >
      <h1
        style={{
          fontFamily: "Dancing Script",
          color: "black",
          textAlign: "center",
        }}
      >
        Carrito de compras <FaShoppingCart color="black" size={30} />
      </h1>
      <div style={{ backgroundColor: "red" }} className="cart-items">
        {cart.map((compra) => (
          <div
            style={{ backgroundColor: "pink", borderRadius: "6px" }}
            className="cart-item"
            key={compra.id}
          >
            {/* <div style={{ backgroundColor: "yellow" }}> */}
            <img
              src={compra.img}
              alt={compra.name}
              style={{ width: "150px", borderRadius: "6px" }} //para achica la imagen
            />
            {/* </div> */}
            {/* div para que vaya uno abajo del otro */}
            {/* Me gustaría traerme el ItemCount por si quiero descontar algo o sumar */}
            <div
              style={{ backgroundColor: "yellow", padding: "1rem" }}
              className="cart-info"
            >
              <span>{compra.name}</span>
              <span>${compra.price},00</span>
              <span>cantidad: {compra.quantity}</span>
              <span>precio final: ${compra.quantity * compra.price},00</span>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(compra.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* crear una funcion que devuelva el total a pagar */}
      <div className="cart-container">
        <div className="cart-total" style={{ backgroundColor: "green" }}>
          <span>Total a pagar: ${total()},00</span>
        </div>

        <div className="cart-buttons">
          <button className="btn btn-danger" onClick={clear}>
            Vaciar carrito
          </button>

          <Link className="btn btn-success" to="/checkout">
            Terminar compra
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartView

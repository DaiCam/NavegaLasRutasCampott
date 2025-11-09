import { useContext } from "react"
import "../css/CartWidget.css"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  console.log({ cart })
  return (
    <div className="cart-nav">
      <span>🛒</span>
      <span>3</span>
    </div>
  )
}

export default CartWidget

import { FaShoppingCart } from "react-icons/fa"
import { Badge } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom"

const CartWidget = () => {
  const { cartQuantity, cart } = useContext(CartContext)
  console.log(cart)
  return (
    <NavLink to="/cart" style={{ cursor: "pointer", textDecoration: "none" }}>
      <FaShoppingCart fontSize={"1rem"} color="black" />
      {cart.length > 0 && (
        <Badge pill bg="danger">
          {cartQuantity()}
        </Badge>
      )}
    </NavLink>
  )
}

export default CartWidget

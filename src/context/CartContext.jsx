import { createContext, useState } from "react"

//creamos el contexto y lo exportamos para su uso en los componentes
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, quantity: prod.quantity + qty }
          } else {
            return prod
          }
        })
      )
    } else {
      setCart([...cart, { ...item, quantity: qty }])
    }
  }

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const clear = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0)
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, total, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}

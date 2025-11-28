import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Home from "./components/Home"

function App() {
  return (
    <div className="body-container">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  mensaje="Leer es viajar sin moverse del lugar"
                  imagen="/el-estante-logo.png"
                />
              }
            />
            <Route path="/category/:type" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

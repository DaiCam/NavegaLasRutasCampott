import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <div className="body-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                mensaje="Haz de la lectura tu momento favorito"
                imagen="/logo-02.png"
              />
            }
          />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

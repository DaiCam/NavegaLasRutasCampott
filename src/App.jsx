import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./css/App.css"

function App() {
  return (
    <div className="body-container">
      <Navbar />
      <ItemListContainer mensaje="Haz de la lectura tu momento favorito" />
    </div>
  )
}

export default App

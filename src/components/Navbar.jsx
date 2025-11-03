import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="div-logo">
        <NavLink to="/">
          <img src="../logo-02.png" alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="div-href">
        <NavLink className="a-nav" to="/">
          Inicio
        </NavLink>
        <NavLink className="a-nav" to="/category/estante">
          Estante
        </NavLink>
        <NavLink className="a-nav" to="/category/hallazgos">
          Hallazgos
        </NavLink>
        <NavLink className="a-nav" to="/category/limitados">
          Limitados
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar

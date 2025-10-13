import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="div-logo">
        <a href="">
          <img src="../logo-02.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className="div-href">
        <a className="a-nav" href="">
          Inicio
        </a>
        <a className="a-nav" href="">
          Estante
        </a>
        <a className="a-nav" href="">
          Hallazgos
        </a>
        <a className="a-nav" href="">
          Limitados
        </a>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar

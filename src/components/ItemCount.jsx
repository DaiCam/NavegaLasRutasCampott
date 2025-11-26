import { useState } from "react"
import "../css/ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const ejecutarCompra = () => {
    onAdd(count)
  }
  console.log("ItemCount")

  return (
    <>
      <div>
        <button
          className="btn btn-count" //"btn btn-danger"
          onClick={restar}
          disabled={count === 0}
        >
          -
        </button>
        <span className="btn btn-number">{count}</span>
        <button className="btn btn-count" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-comprar"
        onClick={ejecutarCompra}
        disabled={count === 0 || stock === 0}
      >
        Agregar al carrito
      </button>
    </>
  )
}

export default ItemCount

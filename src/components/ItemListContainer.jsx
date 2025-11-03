import { useEffect, useState } from "react"
import "../css/ItemListContainer.css"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getProductos()
      .then((res) => {
        if (!type) {
          setData([])
        } else if (type === "estante") {
          setData(res)
        } else {
          setData(res.filter((prod) => prod.category === type))
        }
      })
      .catch((error) => console.log(error))
  }, [type])

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {props.imagen && (
          <img
            src={props.imagen}
            alt="logo"
            style={{
              width: "500px",
              marginTop: "1rem",
            }}
          />
        )}
      </div>
      <h1 className="style-h1">{props.mensaje}</h1>
      {/* <ItemList data={data} /> */}
      {data.length > 0 && <ItemList data={data} />}
    </div>
  )
}

export default ItemListContainer

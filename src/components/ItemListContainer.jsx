import { useEffect, useState } from "react"
import "../css/ItemListContainer.css"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import Loader from "./Loader"
import { productos } from "../mock/AsyncService"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const { type } = useParams()

  //useEffect de firebase
  useEffect(() => {
    setLoader(true)
    //conectarnos con nuestra coleccion
    const productsCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos")
    //pedir los documents
    getDocs(productsCollection)
      .then((res) => {
        //console.log(res)
        // console.log(res.docs)
        //limpiar y obtener datos
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        // console.log(list, 'lista')
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }, [type])

  //PROMESA
  // useEffect(() => {
  //   setLoader(true)
  //   getProductos()
  //     .then((res) => {
  //       if (!type) {
  //         setData([])
  //       } else if (type === "estante") {
  //         setData(res)
  //       } else {
  //         setData(res.filter((prod) => prod.category === type))
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoader(false))
  // }, [type])

  const subirData = () => {
    console.log("subiendo data")
    const prodSubir = collection(db, "productos")
    productos.map((prod) => addDoc(prodSubir, prod))
  }

  return (
    <>
      <button onClick={subirData}>SUBIR UNA VEZ Y BORRAR</button>
      {loader ? (
        <Loader />
      ) : (
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
      )}
    </>
  )
}

export default ItemListContainer

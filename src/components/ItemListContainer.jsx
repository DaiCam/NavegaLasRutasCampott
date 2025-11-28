import { useEffect, useState } from "react"
import "../css/ItemListContainer.css"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../service/firebase"
import Loader from "./Loader"

const ItemListContainer = (props) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  const { type } = useParams()

  useEffect(() => {
    setLoader(true)
    const productsCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }, [type])

  return (
    <>
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
          {data.length > 0 && <ItemList data={data} />}
        </div>
      )}
    </>
  )
}

export default ItemListContainer

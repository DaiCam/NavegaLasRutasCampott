import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const [loading, setLoading] = useState(false)
  const [invalid, setInvalid] = useState(null)
  const { id } = useParams()

  //FIREBASE
  useEffect(() => {
    setLoading(true)
    //referencia de un documento
    const docRef = doc(db, "productos", id)
    //traer el documento
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() })
        } else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  // useEffect(() => {
  //   setLoading(true)
  //   getOneProduct(id)
  //     .then((res) => setDetalle(res))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false))
  // }, [id])

  if (invalid) {
    return (
      <div>
        <h1> El producto no existe! 😱</h1>
        <Link className="btn btn-dark" to="/">
          Volver a home
        </Link>
      </div>
    )
  }
  return <>{loading ? <Loader /> : <ItemDetail detalle={detalle} />}</>
}

export default ItemDetailContainer

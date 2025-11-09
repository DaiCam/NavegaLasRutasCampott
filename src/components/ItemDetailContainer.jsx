import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../mock/AsyncService"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  return <>{loading ? <Loader /> : <ItemDetail detalle={detalle} />}</>
}

export default ItemDetailContainer

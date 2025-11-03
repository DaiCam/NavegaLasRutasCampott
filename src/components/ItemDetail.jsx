import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ detalle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div style={{ flex: "0 0 300px" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
          src={detalle?.img}
          alt={detalle?.name}
        />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "rgba(170, 159, 128, 0.9)",
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>{detalle.name}</h1>

        <p style={{ margin: 0 }}>{detalle.description}</p>

        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
          ${detalle.price},00
        </p>

        <p style={{ margin: 0 }}>Stock disponible: {detalle?.stock}</p>

        <ItemCount stock={detalle?.stock} />
      </div>
    </div>
  )
}

export default ItemDetail

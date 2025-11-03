import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({ prod }) => {
  console.log("item", prod.id)
  return (
    <Card
      style={{
        width: "14rem",
        backgroundColor: "rgba(0,0,0,0.8)",
        borderRadius: "12px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.25)",
        color: "rgba(243, 203, 24, 0.836)",
        fontFamily: "Dancing Script",
        fontSize: "1.3rem",
      }}
    >
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
        </Card.Text>
        <Link className="btn btn-dark" to={`/item/${prod.id}`}>
          Ver más
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item

import React from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const Item = ({ prod }) => {
  console.log("item", prod.id)
  return (
    <Card
      style={{
        width: "12rem",
        backgroundColor: "rgb(206, 206, 211, 0.8)",
        borderRadius: "6px",
        // boxShadow: "0px 2px 10px rgba(0,0,0,0.25)",
        // color: "black",
        fontFamily: '"Dancing", "Monserrat", sans-serif',
        fontSize: "1rem",
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

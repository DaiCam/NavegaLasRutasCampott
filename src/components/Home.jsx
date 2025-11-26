const Home = (props) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "7rem" }}>
        {props.imagen && <img src={props.imagen} alt="logo" style={{}} />}
      </div>
      <div>
        <h1 className="style-h1">{props.mensaje}</h1>
      </div>
    </div>
  )
}

export default Home

export const productos = [
  // {
  //   id: "1",
  //   name: "Cocina con Harry Potter",
  //   description:
  //     "El primer libro de cocina de la saga Harry Potter con 150 recetas inspiradas en los platos de la historia, para que magos y muggles puedan recrear comidas deliciosas y mágicas en casa.",
  //   stock: 12,
  //   price: 34000,
  //   img: "/libro5.webp",
  //   category: "hallazgos",
  // },
  {
    //id: "2",
    name: "Harry Potter explorar Hogwarts",
    description:
      "Un precioso y detallado paseo por Hogwarts, tal y como se ve en las películas de Harry Potter",
    stock: 10,
    price: 65000,
    img: "/libro9.webp",
    category: "limitados",
  },
  {
    //id: "3",
    name: "Harry Potter y la piedra filosofal",
    description:
      "Harry Potter descubre que es un mago y comienza una aventura extraordinaria en Hogwarts. Esta primera edición ilustrada por Jim Kay ofrece una experiencia mágica y cautivadora para fans y nuevos lectores.",
    stock: 15,
    price: 100000,
    img: "/libro6.webp",
    category: "estante",
  },
  {
    //id: "4",
    name: "Harry Potter y la cámara secreta",
    description:
      "En su segundo año en Hogwarts, Harry enfrenta misteriosos ataques y amenazas en la escuela, mientras Jim Kay ilustra con detalle esta edición mágica de la saga.",
    stock: 15,
    price: 117000,
    img: "/libro7.webp",
    category: "estante",
  },
  {
    //id: "5",
    name: "Harry Potter y el prisionera de Azkaban",
    description:
      "Harry, Ron y Hermione enfrentan a Sirius Black, un peligroso fugitivo, y a los dementores que amenazan Hogwarts. Esta edición ilustrada por Jim Kay captura con magia todos los momentos del tercer libro de la saga.",
    stock: 15,
    price: 117000,
    img: "/libro8.webp",
    category: "estante",
  },
]

export const getProductos = () => {
  let error = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Algo salio mal!")
      } else {
        resolve(productos)
      }
    }, 2000)
  })
}

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let prod = productos.find((producto) => producto.id === id)
      resolve(prod)
    }, 2000)
  })
}

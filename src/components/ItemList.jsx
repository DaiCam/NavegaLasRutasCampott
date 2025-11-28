import React from "react"
import Item from "./Item"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const ItemList = ({ data }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        centerMode={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </Carousel>
    </div>
  )
}

export default ItemList

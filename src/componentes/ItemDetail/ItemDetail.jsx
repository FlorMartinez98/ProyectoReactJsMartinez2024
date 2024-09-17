import React from 'react'
import "./ItemDetail.css"
import { useState } from 'react'

const ItemDetail = ({id, nombre, precio, img, detalles}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{detalles}</p>
    </div>
  )
}

export default ItemDetail
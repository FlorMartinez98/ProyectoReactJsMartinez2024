import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';


const ItemDetail = ({id, nombre, precio, img, detalles, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
    toast.success("El producto fue agregado al carrito", {
      autoClose: 3000, 
      theme: "colored",
      position: "top-right",
      style: {
        backgroundColor: "#b56576", 
        color: "#ffffff", 
        border: "2px solid #ffffff", 
        borderRadius: "8px", 
        padding: "10px 15px", 
        fontWeight: "bold", 
        fontSize: "16px", 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" 
      },
      closeButton: true, 
      draggable: true, 
    });    
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{detalles}</p>

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail
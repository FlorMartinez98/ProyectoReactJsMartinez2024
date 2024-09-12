import React from 'react'
import { useState, useEffect } from "react"
import { getProductos } from "../../asynmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([])

    useEffect( ()=>{
        getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))

    }, [])

    return (
        <>
            <h2 style={{color: "#b56576", textAlign: "center"}}>{greeting}</h2>
            <ItemList productos={productos}/>
        </>

    )
}

export default ItemListContainer
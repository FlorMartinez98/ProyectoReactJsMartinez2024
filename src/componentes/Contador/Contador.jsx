import React from 'react'
import { useState } from "react"
import "./Contador.css"


const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if ( contador > inicial) {
            setContador (contador - 1)
        }
    }

return (
    <>
        <div className="contadorContainer">
            <button className="contadorButton" onClick={restarContador}> - </button>
            <strong className="contadorValor">{contador}</strong>
            <button className="contadorButton" onClick={sumarContador}> + </button>
        </div>

        <button className="contadorButton" onClick={()=>funcionAgregar(contador)}> Agregar al carrito</button>
    </>
)
}

export default Contador
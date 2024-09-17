import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import ItemList from "../ItemList/IteamList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams()

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center", color: "#b56576" }}>Mis Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer

import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import ItemList from "../ItemList/IteamList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)

    const {idCategoria} = useParams()

    useEffect(() => {
        setLoading(true)
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch((error) =>{
            console.log(error)
        })
        .finally(()=>{
            console.log("proceso finalizado")
            setLoading(false)
        })
        
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center", color: "#b56576" }}>Mis Productos</h2>
            {loading ? <Loader/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer
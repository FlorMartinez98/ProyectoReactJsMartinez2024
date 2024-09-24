import { useState, createContext } from "react";
import Swal from "sweetalert2";


export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    console.log(carrito)

    const agregarAlCarrito = (item, cantidad) =>{
        const productoExistente = carrito.find(prod => prod.item.id === item.id)
        if(!productoExistente) {
            setCarrito(prev =>[...prev, {item,cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map ( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado) 
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    const eliminarProducto =(id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter (prod => prod.item.id !== id)
        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, tendrás que seleccionar todos nuevamente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4CAF50", 
            cancelButtonColor: "#d33", 
            confirmButtonText: "Sí, estoy seguro!",
            cancelButtonText: "Cancelar", 
            background: "#ffffff",
            color: "#b56576", 
            customClass: {
                title: 'alert-title', 
                content: 'alert-content',
                confirmButton: 'alert-confirm-button', 
                cancelButton: 'alert-cancel-button', 
            },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Eliminados!",
                    text: "Tus productos fueron quitados del carrito.",
                    icon: "success",
                    background: "#ffffff", 
                    color: "#b56576", 
                    confirmButtonColor: "#4CAF50",
                    customClass: {
                        confirmButton: 'alert-confirm-button',
                    },
                });
                setCarrito([]);
                setCantidadTotal(0);
                setTotal(0);
            }
        });
    };

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}
const misProductos= [
    {id: 1, nombre: "Colgante Coorazón", precio: 4000, img: "/public/imagenes/colgante-corazon-chico.jpg"},
    {id: 2, nombre: "Colgante Flor", precio: 4000, img: "/public/imagenes/colgante-flores-grande.jpg"},
    {id: 3, nombre: "Colgante Triángulo", precio: 4000, img: "/public/imagenes/colgante-triangulo.jpeg"},
    {id: 4, nombre: "Portavela Macramé", precio: 4000, img: "/public/imagenes//portavela-macrame.jpeg"},
    {id: 5, nombre: "Vela Postre Grande", precio: 4000, img: "/public/imagenes/vela-postre-grande.jpg"},
    {id: 6, nombre: "Vela Suculenta Copa Chica", precio: 4000, img: "/public/imagenes/vela-suculenta-copa-chica.jpg"},
]

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 2000);
    })
}
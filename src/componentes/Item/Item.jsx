import "./Item.css"

const Item = ({id,nombre, precio, img}) => {
  return (
    <div className='cardProductos'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <button>Ver más</button>
    </div>
  )
}

export default Item
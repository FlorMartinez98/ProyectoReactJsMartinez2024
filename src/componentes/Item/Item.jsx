import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  )
}

export default Item
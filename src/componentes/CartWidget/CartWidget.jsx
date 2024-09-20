import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <div className="cart-widget">
      <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </Link>
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
    </div>
  )
}

export default CartWidget
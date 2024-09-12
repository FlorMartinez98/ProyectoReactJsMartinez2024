import React from 'react'
import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <strong>3</strong>
    </div>
  )
}

export default CartWidget
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {

    return (

        <header>

            <h1>Candele Di Firenze</h1>

            <nav>
                <ul>Home</ul>
                <ul>Productos</ul>
                <ul>Home & Deco</ul>
                <ul>Fragancias</ul>
                <ul>Contacto</ul>
            </nav>

            <CartWidget/>

        </header>
    )
}

export default NavBar
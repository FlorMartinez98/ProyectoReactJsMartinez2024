import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
return (
    <header>
    <Link to="/">
        <img  className='logoCdf' src={"/imagenes/logo.png"} alt="Logo Candele Di Firenze" />
    </Link>

        <nav>
            <ul>
                <li>
                <NavLink to="/"> Inicio </NavLink>
                </li>

                <li>
                <NavLink to="/categoria/velas"> Velas </NavLink>
                </li>

                <li>
                <NavLink to="/categoria/decoracion"> Decoración </NavLink> 
                </li>

                <li>
                <NavLink to="/categoria/fragancias"> Fragancias </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
)
}

export default NavBar
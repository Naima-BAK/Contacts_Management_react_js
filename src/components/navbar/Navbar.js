import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (propriety) => {
    const { title } = propriety;
    return (
        //pourquoi Link au lieu de a :
        // a permet de rafraîchir la page pa contre link non 
        <nav className="navbar navbar-expand-sm navbar-dark bg-info">
            <a className="navbar-brand" href="#">{title} </a>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/add">Add</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">about</Link>
                </li>


            </ul>

        </nav>

    )
}

Navbar.defaultProps = {
    title: "my title",
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
export default Navbar;
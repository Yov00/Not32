import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/add">Add new</Link>
            </li>
        </ul>
    )
}

export default Nav

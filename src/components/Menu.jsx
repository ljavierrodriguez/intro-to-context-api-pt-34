import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
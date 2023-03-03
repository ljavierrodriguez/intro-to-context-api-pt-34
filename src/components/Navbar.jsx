import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BackgroundContext } from '../store/BackgroundContext'
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const { color, setColor } = useContext(BackgroundContext);

    return (
        <nav className={`navbar navbar-expand-lg bg-${color} navbar-${color} `}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Context API</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {
                                color === 'light' ?
                                    (
                                        <span className='nav-link'>
                                            <FaMoon onClick={() => setColor('dark')}/>
                                        </span>
                                    ) : (
                                        <span className='nav-link'>
                                            <FaSun onClick={() => setColor('light')}/>
                                        </span>
                                    )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
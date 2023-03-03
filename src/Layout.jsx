import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* import Menu from './components/Menu' */
import Navbar from './components/Navbar'
import AppContext from './store/AppContext'
import AppBackgroundContext from './store/BackgroundContext'
import About from './views/About'
import Home from './views/Home'

const Layout = () => {
    return (
        <>
            <AppContext>
                <BrowserRouter>
                    {/* children */}
                    <AppBackgroundContext>
                        <Navbar />
                    </AppBackgroundContext>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </AppContext>
        </>
    )
}

export default Layout
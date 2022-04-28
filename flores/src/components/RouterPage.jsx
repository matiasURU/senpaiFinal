import React from 'react'
import { HashRouter  as Router, Routes, Route } from 'react-router-dom'
import Flores from './Flores'
import About from './About'
import Contacto from './Contacto'
import Registro from './Registro'

export default function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Flores />} />
                <Route path='/signup' exact element={<Registro />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/contacto' exact element={<Contacto />} />
            </Routes>
        </Router>
    )
}

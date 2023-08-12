import React from 'react'
import { Route, Routes } from 'react-router'
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'

function Router() {


    return (
        <div>
            <Navbar />
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Form />} />
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default Router;
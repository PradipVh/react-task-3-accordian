import React, { useState } from 'react'
import Form from './Form'
function Navbar() {


    const [openForm, setOpenForm] = useState(false)

    const handleClick = () => {
        setOpenForm(true)

    }
    const handleAddProduct = () => {
        setOpenForm()
    }
    return (
        <div>
            <nav className="navbar navbar-light shadow mb-5 bg-light">
                <span className="navbar-brand mb-0 ">Navbar</span>
                <button onClick={handleClick} className='btn btn-primary'> BuyNow</button>
            </nav>
            {openForm ? <Form onAddProduct={handleAddProduct} /> : false}
        </div>
    )
}
export default Navbar
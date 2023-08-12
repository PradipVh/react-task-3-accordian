import React, { useState } from 'react'
import style from"./style.css";

function Card({ item }) {

    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num + 1)
    }
    const decrease = () => {

        if (num > 0) {
            setNum(num - 1);
        }
    }
    if (!item) {
        return null
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h5>{item.price}</h5>
                            <span style={{ textAlign: 'center' }} className='row button'>
                                <button onClick={decrease}>-</button>
                                <h3> {num}</h3>
                                <button onClick={increase}>+</button>
                            </span>
                            <a href="#" className="btn btn-primary">Add Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
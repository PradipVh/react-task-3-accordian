import React, { useState } from 'react';
import { useBag } from './BagContext';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
    const [num, setNum] = useState(1);
    const navigate = useNavigate()
    const { addToBag } = useBag();

    const handleAddToBag = () => {
        addToBag(item, num);
        navigate('myshoppingbag')
    };


    const increase = () => {
        setNum(num + 1);
    };

    const decrease = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    };

    if (!item) {
        return null;
    }
    const amount = num * item.price
    return (
        <div className='row'>
            <div className='col-md-12 text-center'>
                <div className="card my-3">
                    <img src={item.image} alt="picture" />
                    <div className="card-body ">
                        <h5 className="card-title">{item.name}</h5>
                        <h3 className='mb-3'>$ {item.price}</h3>
                        <div className="d-flex justify-content-center mb-3">
                            <button onClick={decrease}>-</button>
                            <h3 style={{ margin: '0 10px' }}>{num}</h3>
                            <button onClick={increase}>+</button>
                        </div>
                        <a onClick={handleAddToBag} className="btn btn-primary d-block">Add to Bag</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

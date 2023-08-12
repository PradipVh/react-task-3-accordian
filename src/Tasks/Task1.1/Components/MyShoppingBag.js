import React from 'react';
import { useBag } from './BagContext';

function MyShoppingBag() {
  const { bagItems } = useBag();

  return (
    <div className='table'>
      <h2>Your Shopping Bag</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price Details</th>
          </tr>
        </thead>
        <tbody>
          {bagItems.map((bagItem, index) => (
            <tr key={index}>
              <td>{bagItem.item.name}</td>
              <td>{bagItem.quantity}</td>
              <td>$ {bagItem.item.price*bagItem.quantity} /-</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default MyShoppingBag;

import React, { useState } from 'react'
import Card from './Card';

function Form() {

  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({
    image: '',
    pName: '',
    price: ''
  })


  const handleChange = (e) => {
  
    setNewProduct({...newProduct,  [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProduct(prev => [...prev, { image: newProduct.image, name: newProduct.pName, price: newProduct.price }])
    setNewProduct({
      image: '',
     pName: '',
      price: ''
    })
  }


  return (
    <div>
      <div className="container">
        <form className='border p-4 m-4 shadow-lg rounded' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productImage">Product Image</label>
            <input onChange={handleChange} type="link" name='image' value={newProduct.image} className="form-control" id="productImage" />
          </div>
          <div className="form-group">
            <label htmlFor="productName ">Product Name</label>
            <input onChange={handleChange} name='pName' className="form-control" value={newProduct.pName} type="text" id="productName" />
          </div>
          <div className="form-group">
            <label htmlFor="price ">Price</label>
            <input onChange={handleChange} name='price' className="form-control" value={newProduct.price} type="number" />
          </div>
          <button className="btn btn-primary" type="submit">Add Product</button>
        </form>
      </div>
      {product.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  )
}
export default Form;
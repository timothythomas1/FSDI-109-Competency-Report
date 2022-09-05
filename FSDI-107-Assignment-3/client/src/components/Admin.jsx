import './Admin.css'
import React from 'react'
import { useState } from 'react'


const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});

  const saveProduct = () => {
    console.log('Saving Product');
    console.log(product);
  };
  const saveCoupon = () => {
    console.log('Saving Coupon');
    console.log(coupon);
  };

  const textChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    // create a cop, modify the copy, and set the copy to the new object or array
    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const couponChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    // create a cop, modify the copy, and set the copy to the new object or array
    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
  };

  return (
    <div className='admin'>
      <h1>Store Admin</h1>
      <div className="parent">

        <section className='products'>
          <h3>Resgister Products</h3>
          <div className="my-form">
            <label >Title</label>
            <input name='title' type="text" placeholder="Title:" onChange={textChange} />
          </div>
          <div className="my-form">
            <label >Price</label>
            <input name='price' type="number" placeholder="$" onChange={textChange} />
          </div>
          <div className="my-form">
            <label >Category</label>
            <input name='category' type="text" placeholder="Category:" onChange={textChange} />
          </div>
          <div className="my-form">
            <label >Image</label>
            <input name='image' type="text" onChange={textChange} />
            {/* <input name='image' type="file" accept="image/*" onChange={textChange} /> */}
          </div>
          <button type="button" className="btn btn-secondary btn-lg" onClick={saveProduct}>Save Product</button>
        </section>

        <section className='list'>
          <h3>Discount Codes</h3>
          <div className="my-form">
            <label >Coupon</label>
            <input name='coupon' type="text" placeholder="num:" onChange={couponChange} />
          </div>
          <div className="my-form">
            <label >Code</label>
            <input name='code' type="number" placeholder="$" onChange={couponChange} />
          </div>
          <button type="button" className="btn btn-secondary btn-lg" onClick={saveCoupon}>
            Save Coupon
          </button>

        </section>

      </div>

    </div >
  )
}

export default Admin
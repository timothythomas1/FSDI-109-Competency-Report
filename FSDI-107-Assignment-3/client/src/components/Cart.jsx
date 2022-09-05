import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import StoreContext from '../store/storeContext'

const Cart = () => {
    let cart = useContext(StoreContext).cart; // Getting the cart array from context and storing it in a variable

    return (
        <div className='cart-container'>
            <h2>Here are the {cart.length} items in your cart</h2>

            <ul>
                {
                    cart.map((cart, index) => (<li key={index} > {cart.title} </li>))
                }
            </ul>

        </div>
    )
}

export default Cart
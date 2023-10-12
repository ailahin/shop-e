import React, { useContext } from 'react';
import Cart from '../Cart/Cart';
import { CartContext } from '../../App';

const Orders = (props) => {
  const {cart}= props
  console.log(props, 'this is from order')
  // const { cart } = useContext(CartContext); 
   let total=0
    for ( const product of cart){
      
    console.log( product)

   }
  
  return (
    <div>
      <div>
    <h1> this is order</h1>

    <div className="header">
      <h1>My Online Store</h1>
      {/* <p>Cart Items: {cart.length}</p> */}
      <div>
      <h3> Order Summary</h3>
           <p> Total Quantity: {cart.length}</p>
           {/* <p>  Total Items: ${total.toFixed(2)}  </p> */}
      </div>
    </div>
      </div>


      <div>
        <Cart  cart={cart}> </Cart>
      </div>
    </div>

  );
};

export default Orders;
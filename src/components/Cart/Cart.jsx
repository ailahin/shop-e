import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
let total=0
   for ( const product of cart){
    total= total+ product.price

   }

   let shipping = total === 0 || total > 500 ? 0 : 15;
   const tax= (total*1)/100;
   const totalPrice=()=>{
            const grandtotal= total+shipping+tax;
            return grandtotal;
   }
   
   

// let shipping;

// switch (true) {
//   case total === 0:
//     shipping = 0;
//     break;
//   case total > 500:
//     shipping = 0;
//     break;
//   default:
//     shipping = 10;
//     break;
// }

   
   
    return (
        <div className='cart'>
            <h3> Order Summary</h3>
           <p> Total Quantity: {cart.length}</p>
            <p>  Total Items: ${total.toFixed(2)}  </p>
            <p>  Shipping: ${shipping.toFixed(2)}  </p>
            <p >  Tax: ${tax.toFixed(2)}  </p>
            <p className='total-price'>  Total Price: ${totalPrice()}  </p>
            
        </div>
    );
};

export default Cart;
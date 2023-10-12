import React, { useContext, useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import { addToDb } from '../Utlitise/Utilitise';
import Cart from '../Cart/Cart';
import { CartContext } from '../../App';
import Orders from '../Orders/Orders';


const Shop = () => {
    const [products, setProducts]= useState ([]);
   const [cart, setCart]=useState([]);
// const [cart, setCart]= useContext(CartContext );

    useEffect(()=>{
        fetch('products.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
        .catch(error=>{
            console.error('error found: ', error);
        })

    },[])
   


    const handleAddToCart= (product)=>{
        // const newcart= [...cart, product]
        const newcart = [...cart, product];
        setCart(newcart);
        addToDb();
    }

    

    // const handleDelete = (productId) => {
    //     const updatedCart = cart.filter((item) => item.id !== productId);
    //     setCart(updatedCart);
    //   };

    return (
        <div className='shop-container'>
            
           <div>
            <h1> All the products is here </h1>

           <div className='produtcs-container'>
                {
                    products.map(product=>(<Product key={product.id} product={product} handleAddToCart={handleAddToCart} > </Product> 
                    ))
                }
            </div>
            
           </div>
           
            <div className='cart-list divider'>
               
                <Cart cart={cart}> </Cart>
                <Orders cart={cart}></Orders>

            </div>
            
        </div>
    );
};

export default Shop;
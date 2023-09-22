import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts]= useState ([]);
    useEffect(()=>{
        fetch('products.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='shop-container'>
            
           <div>
            <h1> This is products list </h1>

           <div className='produtcs-container'>
                {
                    products.map(product=>(<Product key={product.id} product={product} > </Product>))
                }
            </div>
            
           </div>
                

            <div className='cart-list divider'>
                
                <h1> shop card </h1>
            </div>
            
        </div>
    );
};

export default Shop;
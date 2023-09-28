import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import addToDB from '../Utlitise/Utilitise';

const Shop = () => {
    const [products, setProducts]= useState ([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))

    },[])



    const handleAddToCart= (product)=>{
        const newcart= [...cart, product]
        setCart(newcart);

        addToDB()


    }

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
               
                <Cart cart={cart} > </Cart>

            </div>
            
        </div>
    );
};

export default Shop;
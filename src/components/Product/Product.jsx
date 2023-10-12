import React, { useContext } from 'react';
import './Product.css'

const Product = (props) => {
    const {cart}=props;

    // const {cart,handleAddToCar}= useContext(CartContext)
    // console.log(cart, 'and ', handleAddToCar)

    const {title,img, price, category, stock, seller, ratings}= props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>

            <div className='product-image'>
                <img src={img} alt="" />
            </div>
   
            <div className='product-detail'>
                
                <h4> {title}</h4>
                <p id='price'> Price: ${price}</p>
                <p> Brand: {seller} </p>
                <p> Category: {category} </p>
                <p> Stock: {stock}  Rating: {ratings}   </p>
            </div> 

            <button onClick={()=>{handleAddToCart(props.product)}} className='item-select-btn'> Add To Cart </button>
            
        </div>
    );
};

export default Product;
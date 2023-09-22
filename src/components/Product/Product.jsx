import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product.title);
    console.log(props.product.price);
    console.log(props.product.category);

    const {title,img, price, category, stock, seller, ratings}= props.product;
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
                <p> Stock: {stock}  </p>
                <p> Rating: {ratings} </p>
            </div> 

            <button className='item-select-btn'> Add To Cart </button>
            
        </div>
    );
};

export default Product;
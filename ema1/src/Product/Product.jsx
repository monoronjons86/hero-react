import React from 'react';
import './Product.css'

const Product = (props) => {
    const{img,name,seller,ratings,price}=props.product;
    // const handleAddToCart=()=>{
    //     console.log('product added');
    //  }
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacture:{seller}</p>
            <p>Rating:{ratings}star</p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)}
            className='btn-cart'>add to card</button>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import "./shop.css"

const Shop = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>Product coming here{products.length}</h2>
            </div>
            <div className='shop-container'>
                <h1>Order summary</h1>

            </div>
        </div>
    );
};

export default Shop;
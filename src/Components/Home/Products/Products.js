import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css' ;

const Products = () => {
    const [products, setProducts] =useState([]) ;
    useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    } , [])
    
    return (
        <div>
            <Typography variant="h2"> our Products </Typography>
            <div className="Product-card">
                {
                    products.map(product => <Product
                    products={product}
                    key={product._id}
                    >
                    
                    </Product>).slice(4)
                }
            </div>
        </div>
    );
};

export default Products;
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css' ;

const Products = () => {
    const [products, setProducts] =useState([]) ;
    useEffect( ()=>{
        fetch('./fakedata.json')
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
                    key={product.id}
                    >
                    
                    </Product>).slice(4)
                }
            </div>
        </div>
    );
};

export default Products;
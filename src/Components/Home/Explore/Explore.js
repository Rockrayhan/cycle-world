import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] =useState([]) ;
    useEffect( ()=>{
        fetch('https://shrouded-oasis-44693.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div>
            <Navigation> </Navigation>
            <Typography className="mt-5" variant="h3"> Here's Our all Products </Typography>
            <div className="Product-card">
                
                  {
                      products.map(product=> <Product
                        products={product}
                        key={product._id}
                      ></Product>)
                  }
                    
                
            </div>
        </div>
    );
};

export default Explore;
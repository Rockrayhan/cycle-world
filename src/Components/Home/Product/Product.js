import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Product = (props) => {
    const { name,img , description , _id} = props.products ;
    console.log(props.products);
    return (
        <div className="container">
            <img src={img} alt="" />
            <h5> {name} </h5>
            <p> {description}  </p>
            
           <Link to={`/purchase/${_id}`}>  <Button variant="contained">Buy Now</Button> </Link>

            
        </div>
    );
};

export default Product;
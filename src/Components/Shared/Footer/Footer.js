import React from 'react';
import './Footer.css' ;
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div  className="container footer text-center ">
        <div>
        <h3 className="mt-5"> Always feel free to  <Button variant="contained">Call US</Button>
 </h3>

        <p className="mt-5"> 2021 - Copyright by Cycle World </p>
       
    </div>
    </div>
    );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {

    const {user} = useAuth() ;
    const {_id } = useParams();
    const [data, setData] = useState([]) 
    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => setData(data))
    } ,[])
    const exactProduct = data.filter(td=>td.id == _id) ;
    console.log(exactProduct[0]?.name);
    


    const handleOrderSubmit = e => {

        // collect

        //send

        alert('order confirmed') ;
        e.preventDefault() ;
    }

    return (
        <div>
            <h1 className="mb-5 mt-3 bg-info"> Welcome to Purchase Page  </h1>

            <h1>Product id = </h1>
            <br />
            <h3 >Product name : {exactProduct[0]?.name}</h3>
            <h6>Description :   {exactProduct[0]?.description} </h6>
            <img src={exactProduct[0]?.img} alt="" />

        <br />
        <br />

        <h3>Purchase Details</h3>

        <br />

        <form onSubmit={handleOrderSubmit}>
        <TextField
          sx={{width:'70%' , m:1}}
          disabled
          id="outlined-size-small"
          defaultValue={exactProduct[0]?.name}
          size="small"
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Phone number'
          size="small"
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Address'
          size="small"
          />
        <br />
        <Button type="submit" variant="contained">Order Now</Button>


        </form>



        </div>
    );
};

export default Purchase;
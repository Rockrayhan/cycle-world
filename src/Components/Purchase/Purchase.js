import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../Hooks/useAuth';

const Purchase = () => {

    const {user} = useAuth() ;

    const initialInfo = {displayName: user.displayName, email : user.email, phone : '', address: '', productName: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo) ;

    const handleOnBlur = e => {
      const field = e.target.name ;
      const value = e.target.value ;
      const newInfo = {...orderInfo} ;
      newInfo[field] = value ;
      setOrderInfo(newInfo) ;
    }

    const { id } = useParams();

    const [data, setData] = useState({}) 
    useEffect( ()=> {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=> res.json())
        .then(data => setData(data))
    } ,[])
    console.log(data);
    


    const handleOrderSubmit = e => {
        // collect
        const order = {
          ...orderInfo,
        }

        //send
        fetch('http://localhost:5000/orders' , {
          method: 'POST' ,
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        alert('order confirmed') ;
        e.preventDefault() ;
    }

    return (
        <div>
            <h1 className="mb-5 mt-3 bg-info"> Welcome to Purchase Page  </h1>

           
            <br />
            <h3 >Product name : {data.name} </h3>
            <h6>Description : {data.description}  </h6>
            <img src={data.img} alt="" />

        <br />
        <br />

        <h3>Purchase Details</h3>

        <br />

        <form className="mb-5" onSubmit={handleOrderSubmit}>
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue="product Name"
          size="small"
          name="productName"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
          name="displayName"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Phone number'
          size="small"
          name="phone"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
          name="email"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Address'
          size="small"
          name="address"
          onBlur={handleOnBlur}
          />
        <br />
        <Button type="submit" variant="contained">Order Now</Button>


        </form>



        </div>
    );
};

export default Purchase;
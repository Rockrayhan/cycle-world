import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {
    const {user} = useAuth() ;
    const [MyOrders, setMyOrders] = useState([])

    useEffect( ()=>{
        const url =`https://shrouded-oasis-44693.herokuapp.com/orders?email=${user.email}` 
        fetch (url)
        .then(res=>res.json())
        .then(data => setMyOrders(data)) ;
    }, [])

    return (
        <div>
           <h2> My orders  {MyOrders.length}</h2>
           <TableContainer component={Paper}>
      <Table  aria-label="My Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone no</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Product Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {MyOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.displayName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}  </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;
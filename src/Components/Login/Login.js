import { Grid, TextField, Typography, Button, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData ] = useState({})
    const {user , loginUser , isLoading } = useAuth();

    const location = useLocation() ;
    const history = useHistory() ;

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field , value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        

      loginUser(loginData.email , loginData.password , location, history ) ;
      e.preventDefault() ;
      alert('Login SuccessFull') ;  
    }
    return (
        
  <Box className="mt-5"  >
      <Grid  item xs={8}>
    <Typography style={{border : '3px solid skyblue' , marginTop:'40px' ,padding : '8px'}} className="mt-5" variant="p" gutterBottom>
        please  Login 
      </Typography>
      {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx={{width:'75%', m:2}}
        id="standard-basic"
        label="Your Email" 
        variant="standard" 
        name="email"
        onBlur={handleOnChange}
        />
        <br />
      <TextField 
        sx={{width:'75%', m:2}}
        id="standard-basic"
        label="Your Password" 
        variant="standard" 
        type="password"
        name="password"
        onBlur={handleOnChange}
        
        />
        <br />

        <Button sx={{width: '50%', m:2}} variant="contained" type="submit"> Login </Button>
        <br />
        <NavLink style={{textDecoration:"none"}} to="/register"> <Button variant="text"> New User ? please Register</Button> </NavLink>

      </form>}
      {isLoading && <LinearProgress />}
  </Grid>
  </Box>
  
  

    );
};

export default Login;
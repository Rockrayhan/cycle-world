import { Grid, TextField, Typography, Button, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData ] = useState({}) ;
    const history = useHistory() ;
    const { user , registerUser, isLoading} = useAuth() ;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log( newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        e.preventDefault() ;
        registerUser(loginData.email, loginData.password,loginData.name, history );
        alert('Registration Complete') ;
    }
    return (
        <Box className="mt-5"  >
        <Grid  item xs={8}>
      <Typography style={{border : '3px solid skyblue' , margin:'40px' ,padding : '8px'}} className="mt-5" variant="p" gutterBottom>
          Please  Register 
        </Typography>
        { !isLoading && <form onSubmit={handleLoginSubmit}>
        <TextField 
        sx={{width:'75%', m:2}}
          id="standard-basic"
          label="Your Name" 
          variant="standard" 
          name="name"
          type="text"
          onBlur={handleOnBlur}
          />
          <br />
        <TextField 
        sx={{width:'75%', m:2}}
          id="standard-basic"
          label="Your Email" 
          variant="standard" 
          name="email"
          type="email"
          onBlur={handleOnBlur}
          />
          <br />
        <TextField 
          sx={{width:'75%', m:2}}
          id="standard-basic"
          label="Your Password" 
          variant="standard" 
          type="password"
          name="password"
          onBlur={handleOnBlur}
          
          />
          <br />
        <TextField 
          sx={{width:'75%', m:2}}
          id="standard-basic"
          label="Confirm Password" 
          variant="standard" 
          type="password"
          name="password2"
          onBlur={handleOnBlur}
          
          />
          <br />
  
          <Button sx={{width: '50%', m:2}} variant="contained" type="submit"> Register </Button>
          <br />
          <NavLink style={{textDecoration:"none"}} to="/login"> <Button variant="text"> Already Registered ? Please Login</Button> </NavLink>
  
        </form>}
      {isLoading && <LinearProgress />}

    </Grid>
    </Box>
    );
};

export default Register;
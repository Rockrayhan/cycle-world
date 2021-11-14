import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Navigation = () => {
  const {user , logout} = useAuth() ;
  return (
    <Box sx={{ flexGrow: 1 , bgcolor: '#651fff'}}
    >
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cycle World
        </Typography>


       
      {
        user?.email ? 
          
        <Button onClick={logout} variant="contained"> LogOut </Button>
          :
        <NavLink to="/login"> <Button variant="contained"> Login </Button></NavLink> 
      } 
        
       

      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default Navigation;
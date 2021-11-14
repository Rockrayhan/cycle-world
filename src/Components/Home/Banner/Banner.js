import { Grid, Typography } from '@mui/material';
import React from 'react';
import banner1 from '../../../images/banner1.jpg' ;
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <Grid className="mt-4" container spacing={2}>
  <Grid item xs={12} md={4} >
    <Typography className="mb-5" variant="h2">Welcome to <br /> <span className="fw-bold ms-5">Cycle World</span></Typography>
    <Typography variant="h6" className="ms-3" >
    We are happy that you are here at Cycle World Shop. Our primary objective is to help more and more people engage in bicycles given that they’re functional, eco friendly, awesome to ride, and offer great adventure! From full-suspension bikes to long lasting city commuters to carbon road bicycles, these are all the things that we love.
    <br />
    Here, we care about each of our clients – average bicycle commuter or leisure rider, it doesn’t matter what type of bicycle they want to ride, or in what way they want to ride it.
    </Typography>
    <NavLink  to="/explore"> <Button variant="contained">Explore More</Button> </NavLink>

  </Grid>
  <Grid item xs={12} md={8}>
    <img style={{width:'90%', borderRadius:'10px'}} src={banner1} alt="" />
  </Grid>
 
</Grid>
    );
};

export default Banner;
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('') ;
    const handleOnBlur = e => {
        setEmail(e.target.value) ;
    } 

    const handleAdminSubmit = e => {
        const user = {email} ;
        fetch ('https://shrouded-oasis-44693.herokuapp.com/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        alert('admin added ');
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="mt-5 mb-4">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:'35%'}} label="Email" 
            variant="standard" 
            onBlur={handleOnBlur}
            type="email"/>
            <Button type="submit" variant="contained">Make Admin</Button>


            </form>
        </div>
    );
};

export default MakeAdmin;
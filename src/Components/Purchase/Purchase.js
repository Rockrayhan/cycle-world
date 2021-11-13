import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {id} = useParams();
    const [data, setData] = useState([]) 
    useEffect( ()=> {
        fetch('/fakedata.json')
        .then(res=> res.json())
        .then(data => setData(data))
    } ,[])

    const exactProduct = data.filter(td=>td.id == id) ;
    
    return (
        <div>
            <h1 className="mb-5"> Purchase Page  </h1>
            <h3 >Product name : {exactProduct[0]?.name}</h3>
            <h6>Description :   {exactProduct[0]?.description} </h6>
            <img src={exactProduct[0]?.img} alt="" />

        </div>
    );
};

export default Purchase;
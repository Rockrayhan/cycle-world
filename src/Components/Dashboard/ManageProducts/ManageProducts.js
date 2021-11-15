import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [data, setData] = useState([])
    useEffect( ()=> {
        fetch('http://localhost:5000/products')
        .then (res=>res.json())
        .then(data => setData(data))
    } ,[]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete..!!');

        if (proceed) {
            window.location.reload();
            const url = `http://localhost:5000/products/${id}` ;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0) {
                
                const remaining = data.filter(product => product._id !== id) ;
                setData(remaining);
            }
        });

        }

        
    }
    return (
        <div>
            <h2> Manage Your products Here</h2>  

            {
                data.map(product => <div className="row container"
                key={product._id}
                > 

                    <div className="m-4">
                        <img src={product.img} alt="" />
                        <h3> {product.name}  </h3>
                        <p>  {product.description} </p>
                        <button
                        onClick={() => handleDelete (product._id) } className="btn btn-danger"> Delete </button>
                    </div>


                </div>)
            }
        </div>
    );
};

export default ManageProducts;
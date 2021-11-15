import React from 'react';
import './AddProducts.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrouded-oasis-44693.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset() ;
                }
            })

    }
    return (
        <div className="add-product">
            <h2>Add a Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="img url" />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;
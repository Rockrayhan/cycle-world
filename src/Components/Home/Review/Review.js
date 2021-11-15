import { borderRadius } from '@mui/system';
import React from 'react';

const Review = () => {
    return (
        <div>
            <h2>Our Customer Says...</h2>

            <div className="row container " style={{marginLeft:'100px' }}>
                <div style={{border: '4px solid skyblue' , padding: '5px',borderRadius:'10px'}} className="col-lg-4">
                <p>This is one ofthe best cycle store in Dhaka. I really Liked theway they behaved</p>

                <h5>-- Rizwan Khan </h5>
                </div>
                <div style={{border: '4px solid skyblue' , padding: '5px',borderRadius:'10px'}}  className="col-lg-4">
                <p>An excelent store for those who wants some lady Bicycles. Their After sell service is also satisfying</p>
                <h5>-- Maria Marzia</h5>
                </div>
                <div style={{border: '4px solid skyblue' , padding: '5px',borderRadius:'10px'}}  className="col-lg-4">
                <p> Best Cycle in town </p>
                <h5>-- Khayrul Alam</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;
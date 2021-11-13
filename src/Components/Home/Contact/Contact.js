import React from 'react';

const Contact = () => {
    return (
        
            <div className="container">
                <h1 className="mt-5  mb-5 text-primary"> Contact us </h1>

                <p className="mt-5 mb-4">Write your Questions Here !! We will reply as soon as possible.</p>
                <div className="d-flex justify-content-center align-content-center ">


                    <input className="form-control form-control-sm p-4 mb-5" type="text" placeholder="Write your question...." />
                </div>
        </div>
    );
};

export default Contact;
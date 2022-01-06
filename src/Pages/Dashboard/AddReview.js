import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';


const AddReview = () => {
    const [review, setReview] = useState({});
    const { user } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    const handleReviewAdding = e => {
        const name = user.displayName;
        const email = user.email;
        console.log(review);

        const givenReview = { name, email, ...review };
        console.log(givenReview);
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(givenReview)
        })
            .then()
    }

    return (
        <div className='mx-auto w-50 mt-5'>
            <input className="form-control mb-3" type="text" disabled value={user.displayName} />
            <input className="form-control mb-3" type="text" disabled value={user.email} />
            <input className="form-control mb-3" type="number" placeholder='rating' name="rating" onChange={handleOnChange} />
            <textarea className="form-control mb-3" row={5} col={5} placeholder='description' name="description" onChange={handleOnChange}>
            </textarea>
            <input className="form-control mb-3 btn btn-success" type="submit" onClick={handleReviewAdding} value="Add Review" />
        </div>
    );
};

export default AddReview;
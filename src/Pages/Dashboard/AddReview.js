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
        <div>
            <input type="text" disabled value={user.displayName} />
            <input type="text" disabled value={user.email} />
            <input type="number" placeholder='rating' name="rating" onChange={handleOnChange} />
            <textarea row={5} col={5} placeholder='description' name="description" onChange={handleOnChange}>
            </textarea>
            <input type="submit" onClick={handleReviewAdding} />
        </div>
    );
};

export default AddReview;
import React, { useState } from 'react';

const AddLoanFeature = () => {
    const [feature, setFeature] = useState({});
    const handleOnBlur = e => {
        const value = e.target.value;
        let feature = { feature: value };
        setFeature(feature);
    }
    const handleOnClick = e => {
        fetch("http://localhost:5000/ourPolicies", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(feature)
        })
    }
    return (
        <div>
            <input type="text" onBlur={handleOnBlur} />
            <input type="submit" value="Add A Feature" onClick={handleOnClick} />
        </div>
    );
};

export default AddLoanFeature;
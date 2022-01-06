import React, { useEffect, useState } from 'react';

const AddFaq = () => {
    const [faq, setFaq] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newFaq = { ...faq };
        newFaq[field] = value;
        setFaq(newFaq);
    }
    const handleFaqPost = e => {
        fetch("http://localhost:5000/faq", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(faq)

        })
            .then()
    }
    return (
        <div>
            <input type="text" name="question" onChange={handleOnChange} />
            <input type="text" name="answer" onChange={handleOnChange} />
            <input type="submit" value="submit" onClick={handleFaqPost} />
        </div>
    );
};

export default AddFaq;
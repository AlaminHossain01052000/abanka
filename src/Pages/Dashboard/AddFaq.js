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
        <div className='ms-5 mt-5'>
            <input className="form-control w-50" type="text" name="question" onChange={handleOnChange} placeholder='Question' />
            <input className="form-control w-50 my-5" type="text" name="answer" onChange={handleOnChange} placeholder='Answer' />
            <input className="btn btn-info" type="submit" value="submit" onClick={handleFaqPost} />
        </div>
    );
};

export default AddFaq;
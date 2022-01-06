import React, { useEffect, useState } from 'react';

const AllLoans = () => {
    const [applies, setapplies] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/applicant")
            .then(res => res.json())
            .then(data => setapplies(data))
    }, [applies])
    const changeLoanStatus = (id) => {
        fetch(`http://localhost:5000/applicant/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then()
    }
    return (
        <div>
            {
                applies.map(apply => <ul>
                    <li>{apply.name}</li>
                    <li>{apply.status}</li>
                    <button onClick={() => changeLoanStatus(apply._id)}>Approve</button>
                </ul>)
            }
        </div>
    );
};

export default AllLoans;
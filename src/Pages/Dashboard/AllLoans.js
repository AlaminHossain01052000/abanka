import React, { useEffect, useState } from 'react';
import './AllLoans.css';
const AllLoans = () => {
    const [applies, setapplies] = useState([]);
    useEffect(() => {
        fetch("https://abanka-server.vercel.app/applicant")
            .then(res => res.json())
            .then(data => setapplies(data))
    }, [applies])
    const changeLoanStatus = (id) => {
        fetch(`https://abanka-server.vercel.app/applicant/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify()
        }).then()
    }
    return (
        <div id="all-loans">

            <table>
                <thead>
                    <tr>
                        <th>Applicant Name</th>
                        <th>Applicant Email</th>
                        <th>Application Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applies.map(apply => <tr>
                            <td>{apply.name}</td>
                            <td>{apply?.email}</td>
                            <td>{apply.status}</td>
                            <td>
                                <button onClick={() => changeLoanStatus(apply._id)} className='btn btn-warning'>Approve</button>
                            </td>

                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllLoans;
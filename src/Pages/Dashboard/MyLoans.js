import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyLoans = () => {
    const { user } = useAuth();
    const [applies, setApplies] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/applicant/${user.email}`)
            .then(res => res.json())
            .then(data => setApplies(data))
    }, [user.email])
    console.log(applies);
    return (
        <div>

            <div id="all-loans">

                <table>
                    <thead>
                        <tr>
                            <th>Email Address</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            applies.map(apply => <tr>
                                <td>{apply.email}</td>
                                <td>{apply?.amountOfLoan}</td>
                                <td>{apply.status}</td>


                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyLoans;
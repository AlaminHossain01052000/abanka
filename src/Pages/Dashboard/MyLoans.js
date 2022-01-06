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
            {
                applies.map(apply => <ul>
                    <li>{apply.name}</li>
                    <li>{apply.status}</li>
                </ul>)
            }
        </div>
    );
};

export default MyLoans;
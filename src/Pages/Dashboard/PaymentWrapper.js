import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';

import useAuth from '../hooks/useAuth';
import MakePayment from './MakePayment';

const stripePromise = loadStripe('pk_test_51Jw9W3E5xFZaa1U3H86kJC4fVBscEzCLGTVnJ2yEtb4vpS3t8UHPFDeSQFvdTVyn219Vt700fCSDOT5mxcmiRR6O00od455puL')

const PaymentWrapper = () => {
    const { user } = useAuth();

    const [selected, setSelected] = useState([]);
    const [payment, setMyPayment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/applicant/${user.email}`)
            .then(res => res.json())
            .then(data => setSelected(data))
    }, [user])
    console.log(selected);

    console.log(payment);
    return (
        <div>
            {
                selected.map(select =>
                    select.status === "approved" ? <div>
                        <h5 className='text-center mb-2 font-poppins'>Pay: $ {select?.amountOfLoan}</h5>
                        <Elements stripe={stripePromise}>
                            <MakePayment select={select?.amountOfLoan} />
                        </Elements>
                    </div> : <></>

                )
            }

        </div>
    );
};

export default PaymentWrapper;
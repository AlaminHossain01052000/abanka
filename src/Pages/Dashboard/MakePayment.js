import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const MakePayment = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [error, setError] = useState('');
    console.log(props);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            return;
        }
        else {
            setError('');

            paymentMethod.email = user.email;
            if (paymentMethod) {
                fetch("http://localhost:5000.com/paid", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(paymentMethod)
                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert("Payment is successfull!!!");

                        }
                    })
            }
        }


    }
    return (
        <div className='text-center'>
            <form className='payment-form' onSubmit={handleSubmit}>
                <CardElement className='form'
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',

                                '::placeholder': {
                                },
                            },
                            invalid: {
                                color: '',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mb-3' type="submit" disabled={!stripe}>
                    Pay ${props.select}
                </button>
            </form>
            {
                error ? <p style={{ color: 'red' }} >{error}</p> :
                    <>
                        <p style={{ color: 'green' }} >Your Payment is successful.</p>
                    </>



            }
            <Link to="/home">
                <i title="Home" class="fas fa-arrow-left bg-red fs-5 text-success mb-5"></i>

            </Link>
        </div >
    );
};

export default MakePayment;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const EasyApply = () => {
    const [ourPolicies, setOurPolicies] = useState([]);
    const [applicant, setApplicant] = useState({});
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/ourPolicies")
            .then(res => res.json())
            .then(data => setOurPolicies(data))
    }, [])
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let newApplicant = { ...applicant };
        newApplicant[field] = value;
        setApplicant(newApplicant);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(applicant);
        applicant.status = "pending";
        applicant.email = `${user.email}`;
        fetch("http://localhost:5000/applicant", {
            method: "POST",

            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(applicant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Application Sent Successfully");
                    navigate("/home");
                }
            })
    }

    return (

        <div>
            <h3 className="text-center text-success mt-5">Easily Apply For A Loan</h3>
            <form onSubmit={handleOnSubmit} className="w-50 mx-auto mt-3">

                <div>
                    <label htmlFor="name">Your Name</label>
                    <input className="form-control mb-3" required type="text" name="name" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="fatherName">Your Father's/Husband Name</label>
                    <input className="form-control mb-3" required type="text" name="fatherName" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="address1">Your Present Address</label>
                    <input className="form-control mb-3" required type="text" name="address1" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="address2">Your Parmanent Address</label>
                    <input className="form-control mb-3" required type="text" name="address2" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="mobileNumber">Your Mobile Number</label>
                    <input className="form-control mb-3" required type="text" name="mobileNumber" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="mobileNumber2">Your Alternative Mobile Number</label>
                    <input className="form-control mb-3" required type="text" name="mobileNumber2" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="designation">Your Designation</label>
                    <input className="form-control mb-3" required type="text" name="designation" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="companyName">Your Company Name</label>
                    <input className="form-control mb-3" required type="text" name="companyName" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="monthlyIncome">Your Monthly Income</label>
                    <input className="form-control mb-3" required type="text" name="monthlyIncome" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="amountOfLoan">Loan Amount You Want</label>
                    <input className="form-control mb-3" required type="text" name="amountOfLoan" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="describe">Why do you need this loan</label>
                    <textarea className="form-control mb-3" type="text" name="describe" rows={3} cols={3} onChange={handleOnChange} required />
                </div>
                <div>



                    <select class="form-select mb-3" aria-label="Default select example" name="ourPolicies" onChange={handleOnChange}>
                        {
                            ourPolicies.map(policy => <option style={{ color: "black" }}>{policy.policyName}</option>)
                        }

                    </select>






                </div>
                <div className='display-middle-container'>
                    <input className="form-control mb-3 btn btn-info w-lg-25 w-md-25" required type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default EasyApply;
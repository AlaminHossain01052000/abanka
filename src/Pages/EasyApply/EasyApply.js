import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const EasyApply = () => {
    const [ourPolicies, setOurPolicies] = useState([]);
    const [applicant, setApplicant] = useState({});
    const { user } = useAuth();
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
            .then()
    }

    return (
        <form onSubmit={handleOnSubmit}>

            <div>
                <label htmlFor="name">Your Name</label>
                <input required type="text" name="name" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="fatherName">Your Father's/Husband Name</label>
                <input required type="text" name="fatherName" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="address1">Your Present Address</label>
                <input required type="text" name="address1" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="address2">Your Parmanent Address</label>
                <input required type="text" name="address2" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="mobileNumber">Your Mobile Number</label>
                <input required type="text" name="mobileNumber" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="mobileNumber2">Your Alternative Mobile Number</label>
                <input required type="text" name="mobileNumber2" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="designation">Your Designation</label>
                <input required type="text" name="designation" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="companyName">Your Company Name</label>
                <input required type="text" name="companyName" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="monthlyIncome">Your Monthly Income</label>
                <input required type="text" name="monthlyIncome" onChange={handleOnChange} />
            </div>
            <div>
                <label htmlFor="describe">Why do you need this loan</label>
                <textarea type="text" name="describe" rows={3} cols={3} onChange={handleOnChange} required />
            </div>
            <div>



                <select class="form-select" aria-label="Default select example" name="ourPolicies" onChange={handleOnChange}>
                    {
                        ourPolicies.map(policy => <option style={{ color: "black" }}>{policy.policyName}</option>)
                    }

                </select>






            </div>
            <div>
                <input required type="submit" value="submit" />
            </div>
        </form>
    );
};

export default EasyApply;
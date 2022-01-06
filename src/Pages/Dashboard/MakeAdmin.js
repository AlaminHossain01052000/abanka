import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});
    const handleSetAdmin = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newAdmin = {};
        newAdmin[field] = value;

        setAdminInfo(newAdmin);
    }
    const setAdminRole = e => {
        e.preventDefault();
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <input type="email" name="admin" onChange={handleSetAdmin} />
            <input type="submit" onClick={setAdminRole} />
        </div>
    );
};

export default MakeAdmin;
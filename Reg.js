// RegPage.js
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const Reg = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('formData')) || {};

        // Check if username already exists in stored data
        if (existingData[formData.username]) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        // Add new user data to existing data
        existingData[formData.username] = formData;

        // Save updated data back to local storage
        localStorage.setItem('formData', JSON.stringify(existingData));

        // Navigate to login page
        navigate('/login');
    };

    return (
        <center>
                     
            <form className="form" onSubmit={handleSubmit}>
                
                <div> <h2>Registration Page</h2>
                    <label>Username</label> <br></br>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>

                <br />
                <div>
                    <label>Email</label><br></br>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div><br />

                <div>
                    <label>Password</label><br></br>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} minLength="6"required/>
                </div><br />

                <div>
                    <label>Confirm Password</label><br></br>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} minLength="6" required/>
                </div><br />

                <div>
                    <button type="submit">Register</button>
                </div>
            <br></br>
           
            <div className="already">
                Already have an account? <Link to="/Login">Login</Link>
            </div>
          </form>
        </center>
    );
};

export default Reg;

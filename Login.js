// Loginpage.js
import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Retrieve user data from local storage
        const storedData = JSON.parse(localStorage.getItem('formData')) || {};
        
        // Check if username exists in stored data
        if (!storedData[username]) {
            setError('Username not found');
            return;
        }

        // Check if password matches
        if (storedData[username].password !== password) {
            setError('Incorrect password');
            return;
        }

        // If username and password are correct, navigate to main page
        navigate('/Mainpage');
    };

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={username}
                    placeholder="Enter your username here"
                    onChange={(ev) => setUsername(ev.target.value)}
                    className={'inputBox'} />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={'inputBox'} />
                <label className="errorLabel">{error}</label>
            </div>
                <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="submit" value={'Log in'} onClick={handleSubmit} />
            </div>
            <div className="already">
                    Don't Have a Account ? <Link to="/Reg">Register Now</Link>
                </div>
        </div>
    );
};

export default Login;

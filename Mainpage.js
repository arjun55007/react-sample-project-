import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate login by setting the login state to true
        setIsLoggedIn(true);
        navigate('/login');
    };

    const handleLogout = () => {
        // Simulate logout by setting the login state to false
        setIsLoggedIn(false);
        navigate('/'); 
    };

    return (
        <div className="homeContainer">
            {isLoggedIn ? (
                <div>
                    <h1>Welcome to the Home Page!</h1>
                    <button className="logoutButton" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome! Please Log In</h1>
                    <button className="logoutButton" onClick={handleLogin}>Log out</button>
                </div>
            )}
        </div>
    );
};

export default Mainpage;

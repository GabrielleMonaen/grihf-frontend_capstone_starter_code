import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import Setauthtoken from '../../Setauthtoken'; 

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        console.log('Register API Response:', json); // Log the API response

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            setIsLoggedIn(true);
            return <Setauthtoken authtoken={json.authtoken} />;
            // Redirect to home page
            navigate("/booking-consultation");
            window.location.reload();
        } else {
            console.log('User registration failed:', json);
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left' }}>
                    Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}> Login</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light" style={{ width: 'calc(50% - 0.5rem)', marginRight: '0.5rem' }}>Submit</button><br />
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" style={{ width: 'calc(50% - 0.5rem)', marginRight: '0.5rem' }}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sign_Up;

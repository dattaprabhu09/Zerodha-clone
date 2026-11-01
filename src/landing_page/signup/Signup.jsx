
import React, { useState } from 'react';
import './signup.css'; // Tumchi CSS file yithe import karu shakta

function Signup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState({ text: '', success: false });

  // Input fields change handle karnyasathi
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup Submit Karnyasathi
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setMessage({ text: data.message, success: data.success });
      if (data.success) {
        setTimeout(() => {
          setIsLogin(true); // Login form var switch honar
          setMessage({ text: '', success: false });
        }, 1500);
      }
    } catch (err) {
      setMessage({ text: 'Something went wrong!', success: false });
    }
  };

  // Login Submit Karnyasathi
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
      const data = await response.json();
      setMessage({ text: data.message, success: data.success });
      if (data.success) {
        // Successful login nantar redirect karu shakta, e.g., navigate('/dashboard')
      }
    } catch (err) {
      setMessage({ text: 'Something went wrong!', success: false });
    }
  };

  return (
    <div className="signup-container">
      <div className="container">
        {!isLogin ? (
          /* SIGNUP FORM */
          <div className="form-box">
            <h2>Create Account</h2>
            <form onSubmit={handleSignup}>
              <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
              <button type="submit">Sign Up</button>
            </form>
            {message.text && (
              <p className="message" style={{ color: message.success ? 'green' : 'red' }}>
                {message.text}
              </p>
            )}
            <button className="toggle-btn" onClick={() => { setIsLogin(true); setMessage({text: ''}); }}>
              Already have an account? Login
            </button>
          </div>
        ) : (
          /* LOGIN FORM */
          <div className="form-box">
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
              <button type="submit">Login</button>
            </form>
            {message.text && (
              <p className="message" style={{ color: message.success ? 'green' : 'red' }}>
                {message.text}
              </p>
            )}
            <button className="toggle-btn" onClick={() => { setIsLogin(false); setMessage({text: ''}); }}>
              Don't have an account? Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
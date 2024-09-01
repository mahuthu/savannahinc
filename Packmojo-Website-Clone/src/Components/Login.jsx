import React, { useState } from 'react';
import axios from 'axios';
import styles from './login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://savannahinc.co.ke:8000/api/token/', {
        username,
        password
      });
      localStorage.setItem('token', response.data.access);
      alert('Login successful');
      
      // Redirect to Django admin dashboard
      window.location.href = 'https://savannahinc.co.ke:8000/admin/';

    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <div className={styles.forgotPassword}>
          <a href="forgot" className={styles.link}>Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Colors } from '../../constants/Colors';
import AuthForm from '../../components/authForm/AuthForm';
import ResponsiveHeader from '../../components/header/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
    console.log('Login with:', email, password);
    // On successful login:
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Implement Google login
    console.log('Google login');
  };

  return (
    <>
    <ResponsiveHeader />
    <div style={styles.container}>
      <AuthForm
        title="Login"
        emailValue={email}
        onChangeEmail={setEmail}
        passwordValue={password}
        onChangePassword={setPassword}
        onPress={handleLogin}
        onPressGoogle={handleGoogleLogin}
      />
      
      <div style={styles.footer}>
        <span style={styles.footerText}>Don't have an account?</span>
        <Link to="/signup" style={styles.link}>
          Sign Up
        </Link>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: Colors.background,
    padding: '20px'
  },
  footer: {
    display: 'flex',
    gap: '8px',
    marginTop: '20px'
  },
  footerText: {
    color: Colors.text
  },
  link: {
    color: Colors.primary,
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

export default LoginPage;
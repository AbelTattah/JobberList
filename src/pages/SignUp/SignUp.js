import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Colors } from '../../constants/Colors';
import AuthForm from '../../components/authForm/AuthForm';
import ResponsiveHeader from '../../components/header/Header';
import "./SignUp.css"

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic
    console.log('Signup with:', email, password);
  };

  const handleGoogleSignup = () => {
    // Implement Google signup
    console.log('Google signup');
  };

  return (
    <>
      <ResponsiveHeader />
      <div className='authContainer'>
        <AuthForm
          title="Sign Up"
          emailValue={email}
          onChangeEmail={setEmail}
          passwordValue={password}
          onChangePassword={setPassword}
          onPress={handleSignup}
          onPressGoogle={handleGoogleSignup}
        />

        <div className='footer'>
          <span className='footerText'>Already have an account?</span>
          <Link to="/login" className='link'>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
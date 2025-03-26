import React from 'react';
import CustomButton from '../customButton/CustomButton';
import CustomTextInput from '../textInput/TextInput';
import { Colors } from '../../constants/Colors';
import "./AuthForm.css"
import { useNavigate } from 'react-router-dom';

/**
 * Authentication form component with email/password fields and social login
 * @param {Object} props - Component properties
 * @param {string} props.title - Form title and primary button text
 * @param {string} props.emailValue - Email input value
 * @param {function} props.onChangeEmail - Email input change handler
 * @param {string} props.passwordValue - Password input value
 * @param {function} props.onChangePassword - Password input change handler
 * @param {function} props.onPress - Primary button click handler
 * @param {function} props.onPressGoogle - Google button click handler
 * @returns {JSX.Element} Accessible authentication form
 */
const AuthForm = ({ 
  title,
  emailValue,
  onChangeEmail,
  passwordValue,
  onChangePassword,
  onPress,
  onPressGoogle 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPress();
  };

  const navigate = useNavigate()

  return (
    <form 
      onSubmit={handleSubmit}
      className='authFormContainer'
    >
      <h1 className='title'>{title}</h1>
      
      <div className='input-group'>
        <label className='input-title'>Email</label>
        <CustomTextInput
          type="email"
          value={emailValue}
          onChange={e => onChangeEmail(e.target.value)}
          required
        />
      </div>

      <div className='input-group'>
        <label className='input-title'>Password</label>
        <CustomTextInput
          type="password"
          value={passwordValue}
          onChange={e => onChangePassword(e.target.value)}
          required
        />
      </div>

      <div className='button-group'>
        <CustomButton 
          type="submit"
          onPress={()=>navigate("/jobs")}
          text={title}
        />
      </div>
    </form>
  );
};

export default AuthForm;
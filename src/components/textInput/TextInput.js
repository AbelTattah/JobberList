import React from 'react';

/**
 * CustomTextInput component wraps the default input with custom styling.
 * @param {Object} props - Component props
 * @param {Object} [props.style] - Additional style overrides
 * @param {function} [props.onChangeText] - Text change handler (React Native style)
 * @param {...any} props - Other input props (value, placeholder, etc)
 * @returns {JSX.Element} A styled input element
 */
const CustomTextInput = ({ style, onChangeText, ...props }) => {
  // Convert React Native-style onChangeText to web's onChange
  const handleChange = (e) => {
    if (onChangeText) {
      onChangeText(e.target.value);
    }
  };

  return (
    <input
      type="text"
      style={{
        height: '35px',
        width: '100%',
        alignSelf: 'center',
        borderColor: '#B0A5A5',
        borderWidth: '0.5px',
        margin: '10px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '8px 12px',
        fontSize: '16px',
        boxSizing: 'border-box',
        ...style
      }}
      onChange={handleChange}
      {...props}
    />
  );
};

export default CustomTextInput;
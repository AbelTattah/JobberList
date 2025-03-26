import React from 'react';

/**
 * CustomButton component renders a clickable button with customizable properties
 * @param {Object} props - Component properties
 * @param {string} props.text - Button display text
 * @param {function} props.onPress - Click handler function
 * @param {boolean} [props.big=false] - Determines button size
 * @param {object} [props.style] - Additional style overrides
 * @returns {JSX.Element} Accessible button component
 */
const CustomButton = ({ big = false, onPress, text, style }) => {
  return (
    <button
      onClick={onPress}
      style={{
        width: big ? '440px' : '248px',
        height: '37px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8D6E6E',
        borderRadius: '92px',
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ':hover': {
          backgroundColor: '#785b5b',
        },
        ':active': {
          transform: 'scale(0.98)',
        },
        ...style,
      }}
    >
      <span style={{
        color: 'white',
        fontWeight: '700',
        fontSize: '1.1rem',
        letterSpacing: '0.5px'
      }}>
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
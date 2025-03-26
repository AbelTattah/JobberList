import React from 'react';

const Loader = ({ size = 40, color = '#2d2d2d' }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `4px solid ${color}`,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'rotation 1s linear infinite',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <span 
        style={loaderStyle}
        role="status"
        aria-label="Loading"
      />
      <style>
        {`
          @keyframes rotation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
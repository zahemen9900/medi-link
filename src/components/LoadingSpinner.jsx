import React from 'react';

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
};

const spinner = {
  width: '50px',
  height: '50px',
  border: '5px solid rgba(0, 0, 0, 0.1)',
  borderLeft: '5px solid #4b9b6e',  // Green color to match app theme
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

const LoadingSpinner = () => {
  return (
    <div style={spinnerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinner}></div>
    </div>
  );
};

export default LoadingSpinner; 
// src/components/example-2-inline-css/Button.jsx

const buttonStyle = {
  backgroundColor: '#b974b6',
  borderRadius: '8px',
  color: 'white',
  fontSize: '24pt',
  padding: '15px 50px',
  width: '300px',
};


const Button = ({ buttonText }) => {
  // src/components/example-2-inline-css/Button.jsx
return <button style={buttonStyle}>Example 2</button>;

};

export default Button;

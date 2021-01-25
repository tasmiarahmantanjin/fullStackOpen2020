import ReactDOM from 'react-dom';

// Create Button component to reuse it inside App component
const Button = ({ onClick, text }) => {
	return(<button onClick={onClick}>{text}</button>)
  };

export default Button;
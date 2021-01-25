import ReactDOM from 'react-dom';

// Create Anecdotes component to reuse it inside App component
const Anecdote = ({ title, anecdote, voteCount }) => (
	<>
		<h1>{title}</h1>
		<div>{anecdote}</div>
		<div>Has {voteCount} votes</div>
	</>
);

export default Anecdote;
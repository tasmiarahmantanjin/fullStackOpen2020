import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import components from components directory
import Button from "./components/Button"
import Anecdote from "./components/Anecdote"

const App = ({ anecdotes }) => {
	const [selected, setSelected] = useState(0);

	// states for store the votes, in an array according to the anecdotes length filled with 0
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	// handleClickVote function to store the casted votes to an anecdote 
	const handleClickVote = () => {
		const newVotes = [...votes];
		newVotes[selected]++;
		setVotes(newVotes);
	};

	// handleClickNext function to find a random anecdotes using JS Math.floor & Math.random method
	const handleClickNext = () => setSelected(Math.floor(Math.random() * anecdotes.length));

	// Function that returns the index of the anecdote with the most number of votes
	const highestVote = () => votes.indexOf(Math.max(...votes));

	return (
		<div>
			<Anecdote
				title={"Anecdote of the day"}
				anecdote={anecdotes[selected]}
				voteCount={votes[selected]}
			/>
	
			<Button onClick={handleClickVote} text="vote" />
			<Button onClick={handleClickNext} text="next anecdote" />

			<Anecdote
				title={"Anecdote with most votes"}
				anecdote={anecdotes[highestVote()]}
				voteCount={votes[highestVote()]}
			/>

		</div>
	);
};

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
);

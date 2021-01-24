import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Component Anacdote
const Anecdote = ({ title, anecdote, votes }) => (
  <div>
    <h1>{title}</h1>
    <div>{anecdote}</div>
    <div>Has {votes} votes</div>
  </div>
);

const App = (props) => {
// states
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  })

// generate random anecdote id
const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length);

// function to handle click for the vote button 
const handleClick = () => {(
  let id = getRandomIndex();
  while (id === selected)
    id = getRandomIndex
)setSelected(selected + 1)}


  return (
    <div>

      {props.anecdotes[selected]}
      <p>has {selected} vote</p>
      <p>
        <button onClick={(handleClick)}>vote </button>
        <button onClick={(handleClick)}>next anecdote </button>

      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

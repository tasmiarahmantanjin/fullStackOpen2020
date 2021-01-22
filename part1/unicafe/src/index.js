import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Statistics component
const Statistics = ({ varGood, varNeutral, varBad }) => {
	const total = varGood + varNeutral + varBad;
	// const average = varGood * 1 + varNeutral * 0 + varBad * -1;
	const average = (varGood - varBad) / total
	const positivePercent = `${(varGood / total) * 100}%`;

	if (varGood > 0 || varNeutral > 0 || varBad > 0) {
		return (
			<div>
				<h1>statistics</h1>
				<table>
					<tbody>
						<Statistic text="good" value ={varGood} />
      					<Statistic text="neutral" value ={varNeutral} />
      					<Statistic text="bad" value ={varBad} /> 
						<Statistic text="all" value ={total} />
						<Statistic text="average" value ={average} />
						<Statistic text="positive" value ={positivePercent} />
						{/* <p>good {varGood}</p>
						<p>neutral {varNeutral}</p>
						<p>bad {varBad}</p>
						<p>average {average}</p>
						<p>positive {positivePercent}</p> */}
					</tbody>
				</table>
				
			</div>
			
		);
	}
	return (
		<div>
			<h1>statistics</h1>
			<p>No feedback given</p>
		</div>
	)

  }

// create Statistic component
const Statistic = ({ text, value }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
	</tr>
);

// Button component
	const Button = ({ handleClick, text }) => (
		<button onClick={handleClick}>{text}</button>
  );

const App = () => {
// save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

// handleClick events for good vote
	const handleGoodClick = () => setGood(good + 1)

// handle Click events for neutral vote
	const  handleNeutralClick = () => setNeutral(neutral + 1)

// handleClick events for bad vote
	const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      	<h1>give feedback</h1>
		<Button handleClick={handleGoodClick} text="good"/>
		<Button handleClick={handleNeutralClick} text="neutral"/>
		<Button handleClick={handleBadClick} text="bad"/>


		<Statistics varGood={good} varNeutral={neutral} varBad={bad}/>

    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
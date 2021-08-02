import React from 'react'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, handleEvent }) => {
	return (
		<div>
			<form>
				<div>
					name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
				</div>
				<div>number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
				<div>
					<button onClick={handleEvent} type="submit">add</button>
				</div>
			</form>
		</div>
	)
}

export default PersonForm

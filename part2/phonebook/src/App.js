import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterArr, setFilterArr] = useState('')

  const handleEvent = (e) => {
    e.preventDefault()
    const ifFound = persons.find(p => p.name === newName)

    if (ifFound) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName, phone: newNumber }])
      setNewName('')
      setNewNumber('')
      console.log(`New person: ${newName}`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} /></div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} /></div>
        <div>
          <button onClick={handleEvent} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.filter(p => p.name.toLowerCase().includes(filterArr.toLowerCase())).map(p => (
        <div key={p.name}>
          <div>{p.name} {p.phone}</div>
          </div>
          ))}
    </div>
  )
}

export default App
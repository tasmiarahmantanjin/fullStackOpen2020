import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter 
        filterArr={filterArr}
        setFilterArr={setFilterArr}
      />
      <h2>add a new</h2>
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleEvent={handleEvent}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        filterArr={filterArr}
      />
    </div>
  )
}

export default App
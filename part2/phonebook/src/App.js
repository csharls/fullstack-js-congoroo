import React, { useState } from 'react'

import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [searchText, setSearchText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    const duplicated = persons.find( p => p.name === newName)

    if(duplicated){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newPerson = {
        name: newName,
        number: newPhone
      }
      setPersons(prevPersons => prevPersons.concat(newPerson))
    }
    setNewName('')
    setNewName('')

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch}></Filter>
      <h3>Add a new contact</h3>
      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} name={newName} phone={newPhone}></PersonForm>

      <h3>Numbers</h3>

      {persons.filter(
        p=> p.name.toLowerCase().includes(searchText)
      )
      .map(
        ({name}) => <p key={name}>{name}</p>
      )}
    </div>
  )
}

export default App

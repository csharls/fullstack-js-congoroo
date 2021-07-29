
import React, { useState, useEffect } from 'react'



import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'
import { getAllPersons, savePerson } from './services/persons/persons.js'
const App = () => {
  const [ persons, setPersons ] = useState([]) 

  useEffect(()=>{
    getAllPersons()
    .then(persons => setPersons(persons))
  },[])

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
      savePerson(newPerson)
      .then(
        person => setPersons(prevPersons => prevPersons.concat(person))
      )
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
      <Persons persons={persons} searchText={searchText}/>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    const duplicated = nameVerify(newName)
    if(duplicated){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newPerson = {
        name: newName
      }
      setPersons(prevPersons => prevPersons.concat(newPerson))
    }
    setNewName('')

  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const nameVerify = (name) => {
    return persons.find( p => p.name === name)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(
        ({name}) => <p key={name}>{name}</p>
      )}
    </div>
  )
}

export default App

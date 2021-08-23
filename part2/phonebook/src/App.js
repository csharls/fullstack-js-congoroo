
import React, { useState, useEffect } from 'react'



import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'
import Notification from './Notification.js'
import { getAllPersons, savePerson, deletePerson, updatePerson} from './services/persons/persons.js'
const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [searchText, setSearchText] = useState('')

  const [appMessage, setappMessage] = useState({type:'', message:''})

  useEffect(()=>{
    getAllPersons()
    .then(persons => setPersons(persons))
  },[])



  const handleSubmit = (e) => {
    e.preventDefault()

    const duplicated = persons.find( p => p.name === newName)

    if(duplicated){
      const modify = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (modify) {
        const person = { number: newPhone };
        updatePerson(person, duplicated.id)
          .then((person) =>
            setPersons((prevPersons) =>
              prevPersons.map((p) => (p.id !== person.id ? p : person))
            )
          )
          .then(() => {
            fillAppMessage(
              "success",
              `Contact ${duplicated.name} was updated`
            );
          })
          .catch((err) => {
            fillAppMessage(
              "error",
              `Contact ${duplicated.name} was already remove from server`
            );
          });
      }
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
      .then(
        ()=>{
          fillAppMessage('success', `Contact ${newName} was added to the contact list` )
        }
      )
      .catch(error => {
        fillAppMessage('error', error.response.data )
      })
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
  const handleClick = (e) => {
    const id = e.target.value
    const {name} = persons.filter(p=>p.id===id)[0]

    const result = window.confirm(`Delete ${name}?`);
    if(result){
      deletePerson(id)
      .then(
         status => {
           if (status===204)
            setPersons(persons.filter(p => p.id!==id))
        })
      .then(
        ()=>{
          fillAppMessage('success', `Contact ${name} was remove from server` )
        }
      )
      .catch(error => {
        fillAppMessage('error', error.response.data )
      })
    }
  }

  const fillAppMessage = (type, message) => {
    setappMessage(
      {
        type: type,
        message: message
      }
    )
    setTimeout(()=> setappMessage({type:'', message:''}), 5000)
  }


  return (
    <div>
      <Notification message={appMessage.message} type={appMessage.type} />
      <section>
        <Filter handleSearch={handleSearch}></Filter>
      </section>
      <section>
        <h2>Phonebook</h2>
        <h3>Add a new contact</h3>
        <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange} name={newName} phone={newPhone}></PersonForm>
      </section>
      <section>
        <h3>Numbers</h3>
        <Persons persons={persons} searchText={searchText} handler={handleClick}/>
      </section>


    </div>
    
  )
}

export default App

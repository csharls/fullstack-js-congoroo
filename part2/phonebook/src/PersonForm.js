const PersonForm = ({handleSubmit, handleNameChange, handlePhoneChange, newName, newPhone}) => {
  
  
  return (
    <form onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleNameChange} value={newName}/>
    </div>
    <div>
      phone: <input onChange={handlePhoneChange} value={newPhone}/>
    </div>
    <div>
      <button>add</button>
    </div>
  </form>
  )
}

export default PersonForm
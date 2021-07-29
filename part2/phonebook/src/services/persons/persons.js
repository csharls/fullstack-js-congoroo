import axios from 'axios'

export const getAllPersons = () => {
  return axios.get('http://localhost:3001/persons')
  .then(res => {
    const {data} = res
    return data
  })
}

export const savePerson = ( newObject ) => {
  return axios.post('http://localhost:3001/persons', newObject)
  .then( res => {
    const {data} = res
    return data
  })
}

export const deletePerson = (id) => {
  return axios.delete('http://localhost:3001/persons/'+id)
  .then(
    res => {
      const{data} = res
      return data
    }
  )
}
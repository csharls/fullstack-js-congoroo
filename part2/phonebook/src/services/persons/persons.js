import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

export const getAllPersons = () => {
  return axios.get(baseUrl)
  .then(res => {
    const {data} = res
    return data
  })
}

export const savePerson = ( newObject ) => {
  return axios.post(baseUrl, newObject)
  .then( res => {
    const {data} = res
    return data
  })
}

export const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
  .then(
    res => {
      const{data} = res
      return data
    }
  )
}

export const updatePerson =(person, id) => {
  return axios.patch(`${baseUrl}/${id}`,person)
  .then(res => {
    const {data} =res
    return data
  })
}
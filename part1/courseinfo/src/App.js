import React from 'react'

const Title = ({course }) => {
  return(
    <h1>{ course }</h1>
  )
}

const Content = ({parts}) => {
  
  return (
    <ul>
      {parts.map(( part, index )=> <li key={index}>{part.name} ({part.exercises})</li>)}
    </ul>
  )
}
const Total = (parts) =>{
  let courses = parts.parts.map(p => p.exercises)
  let total = courses.reduce((a,c)=> a+c)

  return (
    <p>Total excercises: { total }</p>
  )

}


const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, {
        name: 'Using props to pass data',
        exercises: 7
      },{
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Title course={ course.name }></Title>
      <Content parts={ course.parts }></Content>
      <Total parts={ course.parts }/>
    </div>
  )
}

export default App
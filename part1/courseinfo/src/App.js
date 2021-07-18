import React from 'react'

const Title = ({text }) => {
  return(
    <h2>{ text }</h2>
  )
}

const Content = ({name, exercises}) => {
  return (
    <li>{name} ({exercises})</li>

  )
}
const Total = (parts) =>{
  let courses = parts.parts.map(p => p.exercises)
  let total = courses.reduce((a,c)=> a+c)

  return (
    <p>Total excercises: { total }</p>
  )

}

const Course = ({course}) => {
  return (
    <div>
      <Title text={course.name}/>
      <ul>
        {course.parts.map( (part) => (
          <Content key={part.id} {...part} />
          ))
        }
      </ul>
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
     
  return (
    <div>
      <h1>Web development curriculum</h1>
       {courses.map(
      (course => (<Course key={course.id} course={course} /> ))
      )}
    </div>
  )
}

export default App
import React from 'react'

const Title = ({course}) => <h1>{course}</h1>

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development by csharls'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}></Title>
      <Part part={part1} excercise={exercises1}></Part>
      <Part part={part2} excercise={exercises2}></Part>
      <Part part={part3} excercise={exercises3}></Part>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
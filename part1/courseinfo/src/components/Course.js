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

export default Course
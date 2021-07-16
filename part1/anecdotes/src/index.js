import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const nextClickHandler = ()=>{
    const number = randNumber()
    setSelected(number)
  }

  const voteClickHandler = () => {
    const vote = [...votes]
    vote[selected]+=1
    console.log(vote);
    setVotes(vote)
  }

  const randNumber = () => {
    const rand = Math.random()
    return rand <= 0.5 ? Math.round(rand*10) : randNumber()
    }

  return (
    <div>
      <p>
        { props.anecdotes[selected] }
      </p>
      <p>
        {`This anecdote has ${votes[selected]} votes`}
      </p>
      <button onClick={ nextClickHandler }>next anecdote</button>
      <button onClick = { voteClickHandler }>Vote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
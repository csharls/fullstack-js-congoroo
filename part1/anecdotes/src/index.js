import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const AnecdoteDisplay = ({ anecdotes, votes, index }) => {
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>{`has ${votes[index]} votes`}</p>
    </div>
  );
};

const Title = ({text}) => (<h1>{ text }</h1>)

const NoVotesAlert = () => (<p>There are no votes yet</p>)

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
    setVotes(vote)
  }

  const randNumber = () => {
    const rand = Math.random()
    return Math.round(rand*5)
    }

  const mostVoted = Math.max(...votes);
  const mostVotedIndex = votes.findIndex((v) => v === mostVoted);


  return (
    <main>
      <Title text={"Anecdote of the day"} />
      <div>
        <AnecdoteDisplay
          anecdotes={props.anecdotes}
          votes={votes}
          index={selected}
        />
        <button onClick={nextClickHandler}>next anecdote</button>
        <button onClick={voteClickHandler}>Vote</button>
      </div>
      <div>
        <Title text={"Most voted anecdote"}></Title>
        {mostVoted > 0 ? (
          <AnecdoteDisplay
            anecdotes={props.anecdotes}
            votes={votes}
            index={mostVotedIndex}
          />
        ) : (
          <NoVotesAlert />
        )}
      </div>
    </main>
  );
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
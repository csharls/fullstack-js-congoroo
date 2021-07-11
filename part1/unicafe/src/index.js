import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClickHandler = ()=>{
    setGood(prevGood => prevGood +1)
  }
  const neutralClickHandler = ()=>{
    setNeutral(prevNeutral => prevNeutral +1)
  }
  const badClickHandler = ()=>{
    setBad(prevBad => prevBad +1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={goodClickHandler}>good</button>
      <button onClick={neutralClickHandler}>neutral</button>
      <button onClick={badClickHandler}>bad</button>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good-bad)/(good+neutral+bad)}</p>
      <p>positive {good/(good+neutral+bad) *100} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {
  const sumAll = good+neutral+bad
  const average = sumAll? (good-bad)/sumAll : 0
  const positive = sumAll? good/sumAll * 100 : 0

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all { sumAll }</p>
      <p>average {average }</p>
      <p>positive { positive } %</p>
    </div>
  )
}

const NoStatisticsAdvice = () => <p><strong>No feedback given</strong></p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let showStatistics = false

  if(good!==0 || neutral!==0 || bad!==0 ) {
    showStatistics = true
  }

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
      { showStatistics
       ? <Statistics good={good} neutral={neutral} bad={bad}/> 
       : <NoStatisticsAdvice></NoStatisticsAdvice>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
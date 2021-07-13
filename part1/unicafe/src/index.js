import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{ text }</h1>

const Button = ({handlerClick, text}) => (
  <button onClick={ handlerClick }>{ text }</button>
  )

const Statistics = ({text,value}) =>  (
  <div>
    <p>{text} {value} {text.includes("positive")?'%':''}</p>
  </div>
)

const NoStatisticsAdvice = () => <p><strong>No feedback given</strong></p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let showStatistics = false

  const sumAll = good+neutral+bad
  const average = sumAll? (good-bad)/sumAll : 0
  const positive = sumAll? good/sumAll * 100 : 0

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
      <Title text="Give feedback"/>
      <Button handlerClick={goodClickHandler} text="good"/>
      <Button handlerClick={neutralClickHandler} text="neutral"/>
      <Button handlerClick={badClickHandler} text="bad"/>
      { showStatistics
       ? <div>
         <Title text="Statistics"/>
         <Statistics text="good" value={good}/> 
         <Statistics text="neutral" value={neutral}/> 
         <Statistics text="bad" value={bad}/> 
         <Statistics text="all" value={sumAll}/> 
         <Statistics text="average" value={average}/> 
         <Statistics text="positive" value={positive}/> 
         </div>
       : <NoStatisticsAdvice></NoStatisticsAdvice>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
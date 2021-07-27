import React from 'react'

const CountryDisplay = ({props:{name}={}}) => <p>{name}</p>

const DisplaySingleCountry = ({c}) => {
  return (
    <div>
      <h1>{c.name}</h1>
      <p><strong>Capital </strong>{c.capital} </p>
      <p><strong>Population </strong>{c.population} </p>
      <h2>Languages</h2>
      <ul>
        {
          c.languages.map(
            l => <li key={l.name}>{l.name}</li>
          )
        }
      </ul>
      <img src={c.flag} style={{width: '200px'}}></img>

    </div>
  )
}


const CountiesList = ({countries}={}) => {
 
return (
  <div>
    { 
      countries.lenght > 1
      ? countries.map(
        c => <CountryDisplay key={c.name} props={c} />
      )
      :<DisplaySingleCountry c={countries[0]} />
    }
  </div>
  )
}

export default CountiesList
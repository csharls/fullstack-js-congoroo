import React from 'react'

export const CountryDisplay = ({data:{name}, onClick}) => <p>{name} <button value ={name} onClick={onClick}>show</button></p>

export const DisplaySingleCountry = ({c}) => {
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


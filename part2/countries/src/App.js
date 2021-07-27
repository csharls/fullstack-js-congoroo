import React,{useState, useEffect} from "react";
import CountiesList, {CountryDisplay, DisplaySingleCountry} from "./CountriesList";
import SearchBar from './SearchBar'
import getAllCountries from "./services/countries/countries";


export default function App  () {
	const [searchText, setSearchText] = useState('')
	const [countries, setCountries] = useState([])
	const [filtered, setFiltered] = useState([])

	useEffect(
		() =>{
			getAllCountries()
			.then(
				json => {
					console.log(json)
					setCountries(json)
				}
			)
		}
	,[])

	const handlerSearchChange= (e) => {

		setSearchText(e.target.value.toLowerCase())
		filterCountries()
	}

	const filterCountries = () => {
		const filteredCountries = countries.filter(
			(c)=> c.name.toLowerCase().includes(searchText.toLowerCase())
		)

		filteredCountries.length <=10
		? setFiltered(filteredCountries)
		: setFiltered([])
	}

	const handelShowSingleCountry = (e) => {

		
		const found =  countries.find(
			c => c.name.includes(e.target.value)
			)
			
		setFiltered([countries.find(
			c => c.name.includes(e.target.value)
			)])
		setSearchText(e.target.value)

	}
	const countriesToShow = countries.filter((c) =>
    c.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return( 
		<div>
			<SearchBar term={searchText} handler={handlerSearchChange}></SearchBar>
			{			
				filtered.length === 0
				? 'too many matches, specify another filter'
				: filtered.length === 1
				?<DisplaySingleCountry c={filtered[0]}/>
				:filtered.map(
					c => <CountryDisplay key={c.name} data={c} onClick={handelShowSingleCountry} />
				)
			}
			
		</div>
	)
}


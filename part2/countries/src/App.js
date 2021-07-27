import React,{useState, useEffect} from "react";
import CountiesList from "./CountriesList";
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
		setSearchText(e.target.value)
		filterCountries()
	}

	const filterCountries = () => {

		const filteredCountries = countries.filter(
			(c, i)=> c.name.toLowerCase().includes(searchText)
		)
		filteredCountries.length <=10
		? setFiltered(filteredCountries)
		: setFiltered([])
	}

  return( 
		<div>
			<SearchBar term={searchText} handler={handlerSearchChange}></SearchBar>
			{
				filtered.length === 0
				? 'too many matches, specify another filter'
				: <CountiesList countries={	filtered } />
			}
			



		</div>
	)
}


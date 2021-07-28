import React,{useState, useEffect} from "react";
import CountiesList, {CountryDisplay, DisplaySingleCountry} from "./CountriesList";
import SearchBar from './SearchBar'
import getAllCountries from "./services/countries/countries";
import getWheater from "./services/weather/forecast";
import Weather from "./Wheater";


export default function App  () {
	const [searchText, setSearchText] = useState('')
	const [countries, setCountries] = useState([])
	const [filtered, setFiltered] = useState([])
	const [wheater, setWeather] = useState({"request":{"type":"City","query":"New York, United States of America","language":"en","unit":"m"},"location":{"name":"New York","country":"United States of America","region":"New York","lat":"40.714","lon":"-74.006","timezone_id":"America\/New_York","localtime":"2021-07-27 18:44","localtime_epoch":1627411440,"utc_offset":"-4.0"},"current":{"observation_time":"10:44 PM","temperature":29,"weather_code":143,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0006_mist.png"],"weather_descriptions":["Haze"],"wind_speed":7,"wind_degree":210,"wind_dir":"SSW","pressure":1013,"precip":0,"humidity":48,"cloudcover":0,"feelslike":29,"uv_index":8,"visibility":10,"is_day":"yes"}})

	useEffect(
		() =>{
			getAllCountries()
			.then(
				json => {
					setCountries(json)
				}
			)
		}
	,[])

	
useEffect(
  () =>{
		filtered.length > 0
		? getWheater(filtered[0].capital)
			.then(
				json => {
					console.log(json)
					setWeather(json)
				}
			)
		:''
  },[filtered]
)

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
			{
				filtered.length === 1
				? <Weather  forecast={wheater} capital={filtered[0].capital}/>
				:''
				

			}
			
		</div>
	)
}


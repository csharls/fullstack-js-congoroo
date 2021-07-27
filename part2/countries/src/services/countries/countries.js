
export default function getAllCountries () {
  return (
    fetch('https://restcountries.eu/rest/v2/all')
    .then(
      res=>{
         return res.json()
      }
    )
  )
}
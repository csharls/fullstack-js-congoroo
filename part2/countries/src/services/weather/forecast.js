
export default function getWheater (capital) {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    .then(
      res=>{
         return res.json()
      }
    )
  )
}
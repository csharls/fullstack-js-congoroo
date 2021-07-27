
import React from 'react'
const SearchBar = ({term, handler}) => <p><span>find countries</span><input value={term} onChange={handler}/></p>

export default SearchBar

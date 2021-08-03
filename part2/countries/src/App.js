import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log("Promise Fulfilled!!!");
        console.log("data:", response.data); 
        setCountry(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Filter country={country}/>
    </div>
  )
}

export default App

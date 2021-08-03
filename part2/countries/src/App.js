import React, { useEffect, useState } from 'react'
// import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([])
  const [filterArr, setFilterArr] = useState('')

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
      find countries<input value={filterArr} onChange={(e) => setFilterArr(e.target.value)} />
      {/* <Filter country={country}/> */}
      {filterArr && country.filter(p => p.name.toLowerCase().includes(filterArr.toLowerCase())).map(p => (
        <div key={p.name}>
          <h1>{p.name}</h1>
          <p>capital {p.capital}</p>
          <p>population {p.population}</p>
          <h1>languages</h1>
          <ul>
            {p.languages.map((li) => {
              return <li key={li.name}>{li.name}</li>
            })}

          </ul>
          {/* <h2>languages{p.languages}</h2> */}
          <img src={p.flag} />
        </div>
      ))}
    </div>
  )
}

export default App

import './App.css';
import React, {useState} from 'react'
import Countries from './Countries.js'

const App = () => {
  const [filterName, setFilterName] = useState('')

  const handleNameFilter = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div className='App-search'>
      find countries
      <input className='App-search-input' type='text' onChange={handleNameFilter} value={filterName}/>
      <br/>
      <Countries filter = { filterName } />
    </div>
  )
  
}

export default App;

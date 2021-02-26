import {useEffect, useState} from 'react'
import { getAllCountries } from './services/CountriesService';
import CountryDetails from './CountryDetails.js'
import './Countries.css'

const Countries = ({filter}) => {
    const [countriesList, setCountriesList] = useState([])
    const [clicked, setClicked] = useState(false)
    
    useEffect(() => {
        getAllCountries(filter).then(countriesFiltered => {
            setCountriesList(countriesFiltered)
            setClicked(false)
        });
      }, [filter])

    const handleClick = (country) => {
        setClicked(true)
        setCountriesList([country])
    }

    return (
    <div id='countriesList'>
        {countriesList.length <= 20 && countriesList.length > 1 ? 
            clicked === false ? 
            <ul>
                {countriesList.map(country => (
                    <li className="list-country-element" key={country.numericCode}>
                        {country.name}
                        <button className='button-show' onClick={() => handleClick(country)}>
                            show
                        </button>
                    </li>))
                }
            </ul>
            : <div>
                <CountryDetails key={countriesList[0].numericCode} country={countriesList[0]}/> 
            </div>
        : (countriesList.length === 1 ? 
                <div>
                    <CountryDetails key={countriesList[0].numericCode} country={countriesList[0]}/>
                </div>
            : countriesList.length === 0 ? 'No results':'Too many matches, specify another filter')}
    </div>
    );
}

export default Countries
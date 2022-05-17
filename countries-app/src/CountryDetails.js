import './CountryDetails.css'
import CountryWeather from './CountryWeather'
import CountryCovid from './CountryCovid'
import React, {useState, useEffect} from 'react'

const CountryDetails = ({country}) => {
    const [clickedCov, setClickedCov] = useState(false)

    useEffect(() => {
        setClickedCov(false)
      }, [country])
    
    const handleClickCov = () => {
        setClickedCov(true)
    }  

    return (
        <div>
            <h1>{country.name}</h1>
            <img alt={country.name} title={country.name} className='flag' src={country.flag}></img>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <p>region: {country.subregion}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages
                    .map(language => {
                        return <li key={language.iso639_1}>
                                    {language.name}
                                </li>
                    })
                } 
            </ul>
            <CountryWeather key={country.numericCode} city={country.capital} />
            <br/>
            {clickedCov !== true ? 
                <button onClick={() => handleClickCov()}>show covid results</button> 
                : <CountryCovid key={country.numericCode} country={country.name} countryCode={country.alpha2Code} />
            }
        </div>  
    )
}

export default CountryDetails
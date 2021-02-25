import './CountryDetails.css'
import CountryWeather from './CountryWeather'

const CountryDetails = ({country}) => {
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
    </div>  
    )
}

export default CountryDetails
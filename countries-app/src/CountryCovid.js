import React, { useState, useEffect } from "react";
import { getCountryData } from './services/CovidService.js'

const API_KEY = process.env.REACT_APP_COVID_API_KEY;

const CountryCovid = ({country, countryCode}) => {
    const [covidData, setCovidData] = useState()

    useEffect(() => {
        getCountryData(countryCode, API_KEY).then(data => {
            setCovidData(data);
        });
      }, [country])

    const formatDate = (date) => {
        let dateFormatted = new Date(date)
        return dateFormatted.toUTCString()
    }

    return (
        <div>
            {covidData === undefined ? 
            <div></div> :
            <div key={covidData.name}>
                <h2>Covid results in {country}</h2>
                <p>last update: {formatDate(covidData.lastUpdate)}</p>
                <p>confirmed: {covidData.confirmed}</p>
                <p>recovered: {covidData.recovered}</p>
                <p>deaths: {covidData.deaths}</p>
            </div>}
        </div>
    )
}

export default CountryCovid

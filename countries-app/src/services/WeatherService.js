import axios from 'axios'

export const getCountryWeather = async (city, key) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + city
    console.log(url)
    const response = await axios.get(url)
    return response.data
}
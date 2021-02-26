import axios from 'axios'

export const getCountryWeather = async (city, key) => {
    if (city !== '') {
        const url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + city
        const response = await axios.get(url)
        return response.data
    }
    return undefined;
}
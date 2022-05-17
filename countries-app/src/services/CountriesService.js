import axios from 'axios'

export const getAllCountries = async (filter) => {
    if (filter !== '') {
        const response = await axios.get('https://restcountries.com/v2/name/' + filter)
        return response.data
    }
    return [];
}

import axios from 'axios'

export const getCountryData = async (country,key) => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: country},
        headers: {
          'x-rapidapi-key': key,
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
      };

    if (country !== '') {
        let response = await axios.request(options)
        return response.data[0];
    }
    return undefined;
}

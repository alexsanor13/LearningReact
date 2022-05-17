import axios from 'axios'

export const getCountryData = async (countryCode,key) => {
  const options = {
    method: 'GET',
    url: 'https://covid19-data.p.rapidapi.com/',
    params: {countrycode: countryCode},
    headers: {
      'X-RapidAPI-Host': 'covid19-data.p.rapidapi.com',
      'X-RapidAPI-Key': key
    }
  };

  if (countryCode !== '') {
    axios.request(options).then(function (response) {
      return response.data[0];
    }).catch(function (error) {
      console.error(error);
    });
  }
  return undefined;
}

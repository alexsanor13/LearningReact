import axios from 'axios'

export const postNewNote = (noteToState) => {
    return axios
            .post('https://jsonplaceholder.typicode.com/posts', noteToState)
            .then(response => {
            const {data} = response
            return data;
    })
}
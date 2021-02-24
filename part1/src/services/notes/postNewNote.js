import axios from 'axios'

export const postNewNote = async (noteToState) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', noteToState);
    const { data } = response;
    return data;
}
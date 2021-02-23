import './App.css';
import {Note} from './Note.js'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { getAllNotes } from './services/notes/getAllNotes';
import { postNewNote } from './services/notes/postNewNote';

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)

  /*-----------fetch way------------*/
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     console.log('se ejecuta useffect')
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log('seteando notas desde la API');
  //         setNotes(json)
  //         setLoading(false)
  //       });
  //   }, 3000)
  // }, [])

  /*-----------axios way------------*/
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     console.log('se ejecuta useffect')
  //     axios.get('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => {
  //         const {data}= response
  //         console.log('seteando notas desde la API');
  //         setLoading(false)
  //         setNotes(data)
  //       })
  //   }, 3000);
  // }, [])


  useEffect(() => {
    setLoading(true)
    console.log('se ejecuta useffect')
    getAllNotes().then(notes => {
      setNotes(notes)
      setLoading(false)
    });
  }, [])


  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(newNote)
    const noteToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    postNewNote(noteToState)
      .then(noteCreated => {
        setNotes(prevNotes => prevNotes.concat(noteCreated))
        //setNotes([...notes, noteCreated])}
        }
      )
    setNewNote('')
  }

  // if(!notes || notes.length === 0) {
  //   return <strong>No hay notas que mostrar!</strong>
  // }

  return (
    <div>
      <h1>Notes</h1>
      {loading ? 'Cargando...' : ''}
      <ol>
        {notes
        .map(note => (
          <Note key={note.id} {...note}/>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button >Crear nota</button>
      </form>
    </div>
  );
}

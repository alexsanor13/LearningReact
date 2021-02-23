import './App.css';
// import Mensaje from './Mensaje.js'
// import Detalles from './Detalles.js'
import {Note} from './Note.js'
import {useState} from 'react'

export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  if(!notes || notes.length === 0) {
    return <strong>No hay notas que mostrar!</strong>
  }

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newNote)
    const noteToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() >= 0.5 ? true : false
    }
    //setNotes(notes.concat(noteToState))
    setNotes([...notes, noteToState])
    setNewNote('')
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? 'Show only importants' : 'Show all'}
      </button>
      <ul>
        {notes
        .filter(note => showAll ? true : note.important === true)
        .map(note => (
          <Note key={note.id} {...note}></Note> 
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button >Crear nota</button>
      </form>
    </div>
  );
}

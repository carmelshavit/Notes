import NoteForm from './NoteForm';
import NoteList from './NoteList'
import { useState } from 'react';

function NoteIndex() {
  const [notes, setNotes] = useState([])

  const onSave = (text, title) => {
    const newNote = getNewNote(text, title)
    setNotes([...notes, newNote])
  }

  const onDelete = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId)

    setNotes(newNotes)
  }
  const getNewNote = (text, title) => {
    const newNote = {
      date: new Date(),
      title,
      text,
      id: makeId()
    }
    return newNote
  }
  function makeId() {
    return Math.random().toString(36).substring(2, 10)
  }
  return (
    <div className="App">
      <NoteForm onNewNote={onSave} />
      <NoteList onDelete={onDelete} notes={notes} />
    </div>
  );
}

export default NoteIndex;



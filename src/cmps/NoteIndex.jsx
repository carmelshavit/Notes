import NoteForm from './NoteForm';
import NoteList from './NoteList'
import { useState } from 'react';

function NoteIndex() {
  const [notes, setNotes] = useState([])

  const onSave = (text) => {
    console.log(text);
    const newNote = getEmptyNote()
    newNote.text = text
    setNotes([...notes, newNote])
  }

  const getEmptyNote = () => {
    const newNote = {
      date: Date.now(),
      text: ''
    }
    return newNote
  }

  return (
    <div className="App">
      <NoteForm onNewNote={onSave} />
      <NoteList notes={notes} />
    </div>
  );
}

export default NoteIndex;
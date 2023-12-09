import NoteForm from './NoteForm'
import NoteList from './NoteList'
import { noteService } from '../services/note.service'
import { useState, useEffect } from 'react'

function NoteIndex() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const loadedNotes = noteService.loadFromStorage('notesDB')
    if (loadedNotes) {
      setNotes(loadedNotes)
    }
  }, [])

  const onSave = (text, title) => {
    const newNote = getNewNote(text, title)
    setNotes([...notes, newNote])
    noteService.saveToStorage('notesDB', [...notes, newNote])
  }

  const onDelete = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId)
    setNotes(newNotes)
    noteService.saveToStorage('notesDB', newNotes)
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
  )
}

export default NoteIndex



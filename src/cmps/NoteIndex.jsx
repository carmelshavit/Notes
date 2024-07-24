import NoteForm from './NoteForm'
import NoteList from './NoteList'
import { noteService } from '../services/note.service'
import { useEffect, useContext, useReducer } from 'react'
import NoteContext from '../context/NoteContext';
import arrReducer from '../reducer/ArrReducer';
import { ACTIONS } from '../App';

function NoteIndex() {
  // const [notes, setNotes] = useState([])
  const { notes, dispatchNotes } = useContext(NoteContext)

  useEffect(() => {
    async function loadNotes() {
      const loadedNotes = await noteService.getNotes()
      if (loadedNotes) {
        dispatchNotes({
          type: ACTIONS.SET_NOTES,
          data: loadedNotes
        })

      }
    }
    loadNotes()

  }, [])

  // not relevant anymore
  const onSave = (text, title) => {
    const newNote = getNewNote(text, title)
    dispatchNotes({
      type: ACTIONS.ADD_NOTE,
      data: newNote
    })
    // setNotes([...notes, newNote])
    noteService.saveToStorage('notesDB', [...notes, newNote])
  }

  const onEditNote = (editedNote) => {
    // const editNote = notes.find((note) => note.id === noteId)
    // editNote.text = text
    // editNote.title = title
    const NoteIndex = notes.findIndex(note => note.id === editedNote.id)
    // const otherNotes = notes.filter((note) => note.id !== noteId)
    // setNotes([...otherNotes, editNote])
    const copyNotes = [...notes]
    copyNotes[NoteIndex] = editedNote
    setNotes(copyNotes)
    noteService.saveToStorage('notesDB', copyNotes)

  }

  const onDelete = (noteId) => {
    dispatchNotes({
      type: ACTIONS.DELETE_NOTE,
      data: noteId
    })
    // const newNotes = notes.filter((note) => note.id !== noteId)
    // setNotes(newNotes)
    noteService.saveToStorage('notesDB', newNotes)
  }



  return (
    <div className="App">
      <NoteForm />
      <NoteList />
    </div>
  )
}

export default NoteIndex



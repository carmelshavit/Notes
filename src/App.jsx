import { useEffect, useReducer } from 'react';
import NoteIndex from './cmps/NoteIndex'
import NoteContext from './context/NoteContext';
import arrReducer from './reducer/ArrReducer';
import { noteService } from './services/note.service';
// import { useContext } from 'react';

export const ACTIONS = {
  ADD_NOTE: "ADD_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  SET_NOTES: "SET_NOTES",
}

function App() {
  // const [notes, setNotes] = useState([])
  const [notes, dispatchNotes] = useReducer(arrReducer, [])

  useEffect(() => {
    noteService.saveToStorage('notesDB', notes)
  }, [notes])

  return (
    <NoteContext.Provider value={{ notes, dispatchNotes }}>
      <div>
        <NoteIndex />
      </div>
    </NoteContext.Provider >
  )
}

export default App

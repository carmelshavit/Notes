import { useState } from 'react'
import NotePreview from './NotePreview'
import NoteForm from './NoteForm'


function NoteList({ notes, onDelete }) {
    const [selectedNote, setSelectedNote] = useState()


    return (
        <div>
            <ul className='note-list'>
                {notes.map((note, index) => {
                    const deleteNote = (ev) => {
                        ev.stopPropagation()
                        onDelete(note.id)
                    }

                    return <li key={index} onClick={() => setSelectedNote(note)}>
                        <button onClick={deleteNote} >❌</button>
                        <NotePreview note={note} />
                    </li>
                })}

                {selectedNote &&
                    (<div className='note-modal'>
                        <button onClick={() => setSelectedNote(null)} >x</button>
                        <NoteForm note={selectedNote} />
                    </div>)}
            </ul>
        </div>
    )
}
export default NoteList
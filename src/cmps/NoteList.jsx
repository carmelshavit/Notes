import { useState } from 'react'
import NotePreview from './NotePreview'


function NoteList({ notes, onDelete }) {
    const [selectedNote, setSelectedNote] = useState()

    const onSelectedNote = (noteId) => {
        const selectNote = notes.find(note => note.id === noteId)
        setSelectedNote(selectNote)
    }

    return (
        <div>
            <ul className='note-list'>
                {notes.map((note, index) => {
                    const deleteNote = (ev) => {
                        ev.stopPropagation()
                        onDelete(note.id)
                    }

                    return <li key={index}>
                        <button onClick={deleteNote} >❌</button>
                        <NotePreview selectNote={onSelectedNote} note={note} />
                    </li>
                })}
                {selectedNote &&
                    (<div className='note-modal'>
                        <button onClick={() => setSelectedNote(null)} >x</button>
                        <NotePreview note={selectedNote} />

                    </div>)}
            </ul>
        </div>
    )
}
export default NoteList
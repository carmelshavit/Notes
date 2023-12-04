import { useState } from 'react'
import NotePreview from './NotePreview'


function NoteList({ notes, onDelete, }) {
    const [selectedNote, setSelectedNote] = useState()

    const onSelectedNote = (noteId) => {
        const selectNote = notes.find(note => note.id === noteId)
        setSelectedNote(selectNote)
    }

    return (
        <div>
            <ul className='note-list'>
                {notes.map((note, index) => {
                    return <li key={index}>
                        <NotePreview selectNote={onSelectedNote} onDelete={onDelete} note={note} />
                    </li>
                })}
                <div className='note-modal'>
                    {selectedNote && <NotePreview note={selectedNote} />}
                </div>
            </ul>
        </div>
    )
}
export default NoteList
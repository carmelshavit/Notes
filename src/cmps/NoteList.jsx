import { useState, useContext } from 'react'
import NotePreview from './NotePreview'
import NoteContext from '../context/NoteContext';
import NoteForm from './NoteForm';


function NoteList() {
    const { notes, dispatchNotes } = useContext(NoteContext)

    const [selectedNote, setSelectedNote] = useState()
    console.log('weeeeeee', notes);

    return (
        <div>
            <ul className='note-list'>
                {notes.map((note, index) => {
                    // const deleteNote = (ev) => {
                    //     ev.stopPropagation()
                    //     onDelete(note.id) // replace dispatch
                    // }

                    // return <li key={index} onClick={() => setSelectedNote(note)}>
                    //     <button onClick={deleteNote} >❌</button>
                    //     <NotePreview note={note} />
                    //
                    return <li key={index} onClick={() => setSelectedNote(note)}>
                        <NotePreview note={note} />
                    </li>
                })}

                {selectedNote &&
                    (<div className='note-modal'>
                        <button onClick={() => setSelectedNote(null)} >x</button>
                        {/* <NotePreview
                            // note={selectedNote}
                            closeModal={() => setSelectedNote(null)}
                            onEditNote={onEditNote}
                            isEdit={true} /> */}
                        <NoteForm note={note} />
                    </div>)}
            </ul>
        </div>
    )
}
export default NoteList
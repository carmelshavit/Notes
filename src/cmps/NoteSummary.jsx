import { react, useContext } from 'react'
import NoteContext from '../context/UserContext';

export default function NoteSummary() {
    const { notes } = useContext(NoteContext)
    // const DateNow = new Date()/1000/

    return (
        <div>
            <p>Number of Notes: {notes.length}</p>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>Date: {note.date}</li>
                ))}
            </ul>

        </div>
    )
}

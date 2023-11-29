import NotePreview from './NotePreview'
//app render noteIndex
//noteIndex render noteForm and noteList
//noteLIst render notePreview with loop

function NoteList({ notes }) {
    return (
        <ul className='noteList'>
            {notes.map((note, index) => {
                const { text, date } = NotePreview
                return <li key={index}>
                    <NotePreview note={note} text={note.text} date={note.date} />
                </li>
            })}
        </ul>
    )
}
export default NoteList
import moment from 'moment'

const NotePreview = ({ note, onDelete, selectNote }) => {
    const formattedDate = moment(note.date).format('MMM Do h:mm A')
    const deleteNote = () => {
        if (confirm('Are you sure?')) onDelete(note.id)
    }

    const onSelectNote = () => {
        selectNote(note.id)
    }

    return (
        <div className="note-preview" onClick={onSelectNote}>
            <div className="note-header">
                <h5>{formattedDate}</h5>
                <button onClick={deleteNote}>❌</button>
            </div>
            <h4>{note.title}</h4>
            <p>{note.text}</p>

        </div>
    )
}
export default NotePreview
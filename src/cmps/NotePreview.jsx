import moment from 'moment'

const NotePreview = ({ note, selectNote }) => {

    const formattedDate = moment(note.date).format('MMM Do h:mm A')


    const onSelectNote = () => {
        selectNote(note.id)
    }

    return (
        <div className="note-preview" onClick={onSelectNote}>
            <div className="note-header">
                <h5>{formattedDate}</h5>
            </div>
            <h4>{note.title}</h4>
            <p>{note.text}</p>

        </div>
    )
}
export default NotePreview